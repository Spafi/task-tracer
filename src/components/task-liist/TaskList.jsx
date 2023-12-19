import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import './TaskList.css';
import Task from "../task/Task.jsx";
import { StrictModeDroppable } from "../../shared/drag-n-drop/StrictModeDroppable.jsx";

export default function TaskList({ tasks, onDeleteTask, onDragEnd, onSaveTask, onCompleteTask }) {

    return (
            <div className='task-list-container max-w-30rem p-4'>
                <DragDropContext onDragEnd={ (result) => onDragEnd( result ) }>
                    <StrictModeDroppable droppableId="tasksDroppable">
                        { (provided) => (
                                <div ref={ provided.innerRef }
                                     { ...provided.droppableProps }
                                     className='flex w-full h-full flex-column gap-4'>
                                    { tasks.map( (task, index) => (
                                            <Draggable key={ task.id }
                                                       draggableId={ task.id.toString() }
                                                       index={ index }>
                                                { (provided) => (
                                                        <div
                                                                ref={ provided.innerRef }
                                                                { ...provided.draggableProps }
                                                                { ...provided.dragHandleProps }
                                                        >
                                                            <Task task={ task }
                                                                  handleDeleteClick={ onDeleteTask }
                                                                  handleCompleteClick={ onCompleteTask }
                                                                  handleSaveClick={ onSaveTask }/>
                                                        </div>
                                                ) }
                                            </Draggable>
                                    ) ) }
                                    { provided.placeholder }
                                </div>
                        ) }
                    </StrictModeDroppable>
                </DragDropContext>
            </div>
    );
}
