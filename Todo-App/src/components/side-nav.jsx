import { useState } from 'react';
import { Link } from 'react-router-dom'

function SideNav(){
    const [input, setInput] = useState("")
    const [search, setSearch] = useState([])


    const handleInputChange =(event)=>{
        setInput(event.target.value)
    }

    const searchData= ()=>{
        const storedItems = localStorage.getItem('todos') || [];
        const filteredData = storedItems.filter(item=>  item.toLowerCase().includes(search.toLowerCase()))
        setSearch(filteredData)
        console.log(search);
    }
    return(
        <div>
            <aside className="side-nav">
                <div className="menu-top">
                    <h2>Menu</h2>
                    <span className="material-symbols-outlined">menu</span>
                </div>
                <div className='search-bar'>

                    <input type="search" name="search" id="search" value={input} onChange={handleInputChange} placeholder=' search'/>
                    <span onClick={searchData} className="material-symbols-outlined">search</span>
                </div>
                <div className="tasks">
                    <h3>TASKS</h3>
                    <ul>
                        <li>
                            <Link to="/upcoming">
                                <span className="material-symbols-outlined">event_upcoming</span>  
                                Upcoming
                            </Link>
                            <span>12</span>
                        </li>
                        <li>
                            <Link to="/today">
                                <span className="material-symbols-outlined">checklist</span>
                                Today
                            </Link>
                            <span>12</span>
                        </li>
                        <li>
                            <Link to="/calandar">
                            <span className="material-symbols-outlined">calendar_month</span>
                            Calandar
                            </Link>
                            <span>12</span>
                        </li>
                    </ul>
                </div>
                <div className="lists">
                    <h3>LISTS</h3>
                    <ul>
                        <li>Personal</li>
                        <li>Work</li>
                        <li>List 1</li>
                    </ul>
                    <div>  <span className="material-symbols-outlined">add</span>Add New List</div> 
                </div>
                <div className="tags">
                    <div className='tags__header'>
                    <h3>TAGS</h3>
                    <span className="material-symbols-outlined">add</span>
                    </div>
                    <ul>
                        <li>Tag 1</li>
                        <li>Tag 2</li>
                        <li>Tag 3</li>                      
                    </ul>
                </div>
                <div className='side-nav__settings'>
                    <Link to="/settings">
                    <span className="material-symbols-outlined">tune</span> 
                    Settings
                    </Link>
                </div>
                
            </aside>
        </div>
    )
}
export default SideNav;