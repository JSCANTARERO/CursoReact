import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './task.css';

class Task extends Component{

    StyleCompleted() {
        return {
            fontSize: '20px',
            //Si una tarea tiene su propiedad don en true esta tarea
            //se mostrara en gris de lo contrario se mostrara en negro
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        const {task} = this.props;
        return <p style = {this.StyleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
        <input type="checkbox"/>
        <button style={btnDelete}>
            x
        </button>
        </p>
    }
}

//Aca estamos especificando que el tipo de valor que se debe recibir es de tipo objeto
Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete ={
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;