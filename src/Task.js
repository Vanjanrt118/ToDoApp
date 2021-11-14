

const Task = (props) => {
    function setReminderBorder(task){
        if(task.reminder)
        return "reminder";
    }
    return (
        <div className={`task ${setReminderBorder(props.task)} `} onDoubleClick={()=>props.onToggle(props.task.id)}>
            <h3>{props.task.text} <button id={props.task.id} onClick={()=>props.func(props.task.id)} className="btn btn-danger deleteButton mb-4">Delete</button>
</h3>
            <p style={{backgroundColor:"#F3CEB5"}} className="m-1 mb-4" >{props.task.date}</p>
        </div>
    )
}


export default Task
