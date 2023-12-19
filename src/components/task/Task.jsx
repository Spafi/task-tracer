import './Task.css'
import Checkbox from "../../shared/checkbox/Checkbox.jsx";
import { Tooltip } from "primereact/tooltip";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

export const severitiesOptions = {
    IMPORTANT: 'IMPORTANT',
    REGULAR  : 'REGULAR',
    LOW      : 'LOW',
}

export const taskStates = {
    NEW        : 'NEW',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE       : 'DONE',
    EXPIRED    : 'EXPIRED'
}

export default function Task({ task, handleDeleteClick, handleSaveClick, handleCompleteClick }) {
    const [ taskDetails, setTaskDetails ] = useState( task )
    const [ isEditing, setIsEditing ] = useState( false )
    const [ isDeleted, setIsDeleted ] = useState( false )

    const severities = [
        { name: 'Important', value: severitiesOptions.IMPORTANT },
        { name: 'Regular', value: severitiesOptions.REGULAR },
        { name: 'Low Priority', value: severitiesOptions.LOW },
    ]

    const displaySeverityColor = (severity) => {
        switch ( severity ) {
            case( severitiesOptions.IMPORTANT ):
                return 'important'
            case( severitiesOptions.REGULAR ):
                return 'regular'
            case( severitiesOptions.LOW ):
                return 'low'
        }
    }

    useEffect( () => {
        if ( task.status===taskStates.NEW ) {
            setIsEditing( true )
        }
    }, [ task.status ] )

    const selectedSeverityTemplate = (option, props) => {
        if ( option ) {
            return (
                    <div className="flex align-items-center option selected-option">
                        <i className={ `bi ${ formatSeverityIcon( option.value ) } pr-2` }/>
                        <div>{ option.name }</div>
                    </div>
            );
        }
        return <span>{ props.placeholder }</span>;
    };

    const severityOptionTemplate = (option) => {
        return (
                <div className="flex align-items-center option">
                    <i className={ `bi ${ formatSeverityIcon( option.value ) } px-2` }/>
                    <div>{ option.name }</div>
                </div>
        );
    };

    const formatSeverityIcon = (severity) => {
        switch ( severity ) {
            case ( severitiesOptions.LOW ):
                return 'bi-chevron-double-down low-only-text'
            case ( severitiesOptions.REGULAR ):
                return 'bi-circle regular-only-text'
            case ( severitiesOptions.IMPORTANT ):
                return 'bi-chevron-double-up important-only-text'
        }
    }

    const formatSeverityDisplay = (severity) => `${ severity[0] }${ severity.slice( 1 ).toLowerCase() }`


    function onEditClick() {
        setIsEditing( prevState => !prevState )
    }

    function onSaveClick() {
        setIsEditing( false )
        handleSaveClick( taskDetails )
    }

    function onCompleteClick(isChecked) {
        const updatedStatus = isChecked ? taskStates.DONE : taskStates.IN_PROGRESS
        setTaskDetails( { ...taskDetails, status: updatedStatus } )
        handleCompleteClick( { ...taskDetails, status: updatedStatus } )
    }

    function onDeleteClick() {
        setIsDeleted( true )
        deleteAfterAnimation()

    }

    const deleteAfterAnimation = () => {
        setTimeout( () => {
            handleDeleteClick( task )
        }, 500 )
    }


    return (
            <div className={ `task-container grid ${ isEditing ? 'open-task expanded-task' : 'closed-task' } ${ isDeleted ? ' out' : '' }` }>
                <div className={ `task-actions col-2` }>
                    <div className={ `severity ${ displaySeverityColor( taskDetails.severity ) }` }></div>
                    <Checkbox value={ taskDetails.status==taskStates.DONE }
                              className={ 'checkbox' }
                              onChecked={ onCompleteClick }/>
                </div>
                <div className='task-details col-9 flex flex-column justify-content-between pr-3'>
                    <div>
                        <div className='title mb-2 text-lg font-semibold'>
                            { !isEditing &&
                                    <span className={ `${ taskDetails.status===taskStates.DONE ? 'strikethrough' : '' }` }>{ task.title }</span> }
                            { isEditing && <InputText placeholder={ `${ task.title ? task.title : 'Title' }` }
                                                      defaultValue={ task.title }
                                                      className='w-full bg-transparent text-lg font-semibold'
                                                      onChange={ (e) => setTaskDetails( { ...taskDetails, title: e.target.value } ) }
                            > </InputText> }
                        </div>
                        <div>
                            { ( !isEditing && task.content.length > 40 ) &&
                                    <Tooltip target={ `.task-content-${ task.id }` } position='bottom'>
                                        <p className='p-2'>{ task.content }</p>
                                    </Tooltip> }
                            { !isEditing ?
                              <p className={ `task-content task-content-${ task.id } ${ isEditing ? ' white-break' : '' }` }> { task.content }</p>
                                         : <InputTextarea placeholder='Content'
                                                          defaultValue={ task.content }
                                                          rows={ 5 }
                                                          onChange={ (e) => setTaskDetails( { ...taskDetails, content: e.target.value } ) }
                                                          className={ `w-full bg-transparent m-0 task-content-${ task.id } ${ isEditing ? ' ' : '' }` }/>
                            }
                        </div>
                    </div>
                    <div className='w-full flex justify-content-between gap-3 mb-1'>
                        { !isEditing ?
                          <div>
                              <p className={ `text-xs ${ displaySeverityColor( task.severity ) }-only-text` }>{ formatSeverityDisplay( task.severity ) }</p>
                          </div> :
                          <Dropdown defaultValue={ taskDetails.severity }
                                    value={ taskDetails.severity }
                                    onChange={ (e) => setTaskDetails( { ...taskDetails, severity: e.value } ) }
                                    options={ severities }
                                    optionLabel="name"
                                    placeholder="Select a Severity"
                                    valueTemplate={ selectedSeverityTemplate }
                                    itemTemplate={ severityOptionTemplate }
                                    className="bg-transparent severity-dropdown"
                          /> }
                        { !isEditing ?
                          <div>
                              <p className={ `${ new Date( task.dueDate ) >= new Date( Date.now() ) ? 'text-red' : '' } 'text-xs'` }> { new Date( task.dueDate )?.toDateString() ?? '' }</p>
                          </div> :
                          <Calendar value={ new Date( taskDetails.dueDate ) }
                                    onChange={ (e) => setTaskDetails( { ...taskDetails, dueDate: e.value } ) }
                                    showIcon
                                    placeholder='Due Date'
                                    className='calendar'
                                    showTime
                                    hourFormat="24"
                                    dateFormat='dd/mm/yy'
                                    minDate={ new Date() }></Calendar> }
                    </div>
                </div>
                <div className='col-1 flex flex-column align-items-center justify-content-between pr-2'>
                    <button className='action-button' onClick={ onDeleteClick }>
                        <i className="bi bi-trash2-fill text-red-500"></i>
                    </button>
                    { isEditing ?
                      <button className='action-button' onClick={ onSaveClick }>
                          <i className="bi bi-check text-green-500 text-2xl"></i>
                      </button> :
                      <button className='action-button' onClick={ onEditClick }>
                          <i className="bi bi-pen-fill text-green-500"></i>
                      </button> }

                </div>
            </div>
    )
}
