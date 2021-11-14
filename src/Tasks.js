import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = (props) => {
    
    return (
        <div>
           {props.task.map((task)=>(<Task key={task.id} task={task} func={props.func} onToggle={props.onToggle}></Task>))}
        </div>
    )
}




Tasks.propTypes = {

}

export default Tasks
