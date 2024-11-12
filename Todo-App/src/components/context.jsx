import { createContext, useState } from "react";


export const TodoContext = createContext(false);

const TodoState =({children})=>{
    const [displayform, setDisplayform] = useState(null)
    return <TodoContext.Provider value={{displayform, setDisplayform}}>{children}</TodoContext.Provider>
}

export default TodoState;