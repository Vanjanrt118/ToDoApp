import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text,setText]=useState('');
    const[date,setDate]=useState('')
    const[reminder,setReminder]=useState(false)
        function onSubmit(e){
            e.preventDefault()
            if(!text){
                alert("Please inser task text!")
                return
            }
            onAdd({text,date,reminder})
            setText('')
            setDate('')
            setReminder(false)
        }
    return (
       
        <form onSubmit={onSubmit}>
            <div className="form-control mb-1" >
                <label htmlFor="" >Task</label>
                <input type="text" placeholder="Add task" value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="form-control mb-1">
                <label htmlFor="">Day and Time</label>
                <input type="text" placeholder="Add day and time" value={date} onChange={(e)=>setDate(e.target.value)} />
            </div>
            <div className="form-control mb-1">
               Set reminder <input type="checkbox" value={reminder}  onChange={(e)=>setReminder(e.currentTarget.checked)} checked={reminder}/>
            </div>
            <div className="text-center"></div>
            <input type="submit" value="Save Task"  className="btn btn-success mb-1" />
        </form>
    )
}

export default AddTask
