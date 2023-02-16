import React, {useEffect, useState} from 'react';
import {todosService} from "../../services";
import {Todo} from "../Todo/Todo";

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAllTodos().then(({data}) => setTodos([...data]))
    }, [])

    return (
        <div className='todos'>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};