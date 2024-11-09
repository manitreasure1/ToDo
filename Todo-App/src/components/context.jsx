import { createContext } from "react";


export const TodoContext = createContext(null);

const TodoState =({children})=>{
    return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>
}

export default TodoState;