import { useContext, useEffect, useState } from 'react'
import styles from '../main.module.css'
import { TodoContext } from './context'


export default function Home(){

    const [getTodo, setTodo] = useState([])
    useEffect(()=>{
        JSON.parse(localStorage.getItem('todos')) && setTodo(JSON.parse(localStorage.getItem('todos')))
    }, [])
   

    const {displayform, setDisplayform} = useContext(TodoContext);
    const toggleForm=()=>{
        setDisplayform(!displayform)
    }

     const AddFormTodo =()=>{
        const [formHeading, setFormHeading] = useState('')
        const [formText, setFormText] = useState('')
        const [formCategory, setFormCategory] = useState('')

        const handleInputChange =(event)=>{
            const {name, value} = event.target
            if(name === 'heading')setFormHeading(value);
            if(name === 'text')setFormText(value);
            if(name === 'category')setFormCategory(value);
        }
        const handleSubmit=()=>{
            // event.preventDefault();
            const newTodo = { formHeading, formText, formCategory };
            setFormHeading('');
            setFormText('');
            setFormCategory('');
            addToStorage(newTodo)
        }
        const addToStorage=(todo)=>{
            const localData = JSON.parse(localStorage.getItem('todos')) || [];
            const storeData = [...localData, todo]
            localStorage.setItem('todos', JSON.stringify(storeData))  
        }
            
        
        return(
            <div>
                
                <div className={styles.formContainer}>
                    <h2>Add Todo Item</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <label htmlFor="heading">Heading:</label>
                        <input type="text" id="heading" name="heading" required  value={formHeading} onChange={handleInputChange}/>
                        </div>
                        <div>
                        <label htmlFor="text">Text:</label>
                        <textarea name="text" id="" cols="30" rows="10" placeholder='type here ...' value={formText} onChange={handleInputChange}></textarea>
                        </div>
                        <div>
                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" required  value={formCategory} onChange={handleInputChange}/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    const TodoCard=()=>{
       
        
        // const [explandText, setExplandText] = useState(false);
        
        // const toggleText=()=>{
        //     setExplandText(!explandText)
        // }

        return (
                <div className={styles.card_Container}>
                    {getTodo.map((todoItems, index)=>(
                        
                        <div key={index} className={styles.card}>
                            <div className={styles.card_content}>
                                <h2>{todoItems.formHeading}</h2>
                                <p >{todoItems.formText.substring(0, 120)}...</p>
                            </div>
                            <small>{todoItems.formCategory.substring(0, 20)}...</small>
                        </div>
                                 
                    ))}
                </div>

                
               
            
        )
    }
    
    
    return(
        <div>
           <h1 className={styles.home_h1}>Home Page</h1>

           
            {getTodo.length ? <TodoCard/>: <h1>Add To List</h1> }
           
           <div className={styles.container} onClick={toggleForm}>
                <div className={styles.add_card}>
                    <span  className="material-symbols-outlined">add</span>
                </div>               
            </div> 
            {displayform && <AddFormTodo/>}
        </div>      
    )
}







