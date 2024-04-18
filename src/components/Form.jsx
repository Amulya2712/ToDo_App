import { useState } from "react";
import styles from './form.module.css'

export default function Form({todos,setTodos}){
    // const [todo,setTodo] = useState("");
    const [todo,setTodo] = useState({name:"",done:false});

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:"",done:false});
    }
    return (
        <div>
            <form className={styles.todoForm} action="" onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <input className={styles.todoInput} onChange={(e)=>setTodo({name:e.target.value, done:false})} value={todo.name} type="text" placeholder="Enter Todo Item..." />
                    <button className={styles.todoBtn} type="submit">Add</button>
                </div>
            </form>
        </div>
    );
}
 