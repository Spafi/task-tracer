import TaskList from "../task-liist/TaskList.jsx";
import './Tasks.css'
import AppButton from "../../shared/button/AppButton.jsx";
import { useEffect, useState } from "react";
import { deleteTask, getSortedFilteredTasks, saveTask } from "./TasksService.js";
import { useUser } from "@clerk/clerk-react";
import { severitiesOptions, taskStates } from "../task/Task.jsx";

export default function Tasks() {

    const { isSignedIn, user } = useUser()

    const [ tasks, setTasks ] = useState( [] )
    const [ sort, setSort ] = useState( null )
    const [ order, setOrder ] = useState( null )
    const [ filter, setFilter ] = useState( null )

    useEffect( () => {
        isSignedIn && getTasks( user.id, sort, order, filter )
    }, [ sort, order, filter ] );

    useEffect( () => {
        setTasks( tasks );
    }, [ tasks ] );

    const handleDeleteTask = (task) => {
        setTasks( prevTaskList => prevTaskList.filter( t => t.id!==task.id ) )
        deleteTask( task )
    }

    const handleDragEnd = (result) => {
        if ( !result.destination ) {
            return;
        }

        const reorderedTasks = Array.from( tasks );
        const [ reorderedItem ] = reorderedTasks.splice( result.source.index, 1 );
        reorderedTasks.splice( result.destination.index, 0, reorderedItem );

        setTasks( reorderedTasks );
    };

    async function getTasks(userId, sort, order, filter) {
        const tasks = await getSortedFilteredTasks( userId, sort, order, filter )
        tasks && setTasks( tasks )
    }

    async function onAddTaskClick() {
        const newTask = {
            userId   : user.id,
            createdAt: new Date(),
            severity : severitiesOptions.LOW,
            title    : "",
            content  : "",
            status   : taskStates.NEW,
            order    : tasks.length,
            dueDate  : new Date(),
        }
        const createdTask = await saveTask( newTask )
        setTasks( prevState => [ createdTask, ...prevState ] )
        saveTask( { ...createdTask, status: taskStates.IN_PROGRESS } )
    }

    async function handleSaveTask(task) {
        const inProgressTask = { ...task, status: taskStates.IN_PROGRESS }
        const createdTask = await saveTask( inProgressTask )
        const tasksWithNewTask = tasks.map( t => t.id===createdTask.id ? createdTask : t )
        setTasks( tasksWithNewTask )
    }

    return (
            <div className='w-full max-w-30rem card border-round-3xl'>
                <TaskList tasks={ tasks }
                          onDeleteTask={ handleDeleteTask }
                          onDragEnd={ handleDragEnd }
                          onSaveTask={ handleSaveTask }/>
                <div className='add-task-container'>
                    <AppButton icon='bi bi-plus' handleClick={ onAddTaskClick }/>
                </div>
            </div>
    )
}
