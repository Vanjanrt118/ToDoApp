import React from 'react'
import Button from './Button'

const Header = (props) => {
  
    return (
        <header>
            <h1  style={{color:'green',backgroundColor:'white'}}>{props.naslov} </h1>
           <Button color="btn btn-success buttonAdd " text="Add" toggleAddTask={props.toggleAddTask}></Button>
        
        </header>
    )
}
Header.defaultProps={
    naslov:'Ovo je naslov'
}




export default Header
