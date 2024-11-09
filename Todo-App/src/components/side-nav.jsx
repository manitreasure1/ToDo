import { useState } from 'react';
import { Link } from 'react-router-dom'

function SideNav(){
    const [input, setInput] = useState("")
    return(
        <div>
            <aside className="side-nav">
                <div className="menu-top">
                    <h2>Menu</h2>
                    <span onClick={{}} className="material-symbols-outlined">menu</span>
                </div>
                <div className='search-bar'>

                    <input type="search" name="search" id="search" placeholder=' search'/>
                    <span onClick={{}} class="material-symbols-outlined">search</span>
                </div>
                <div className="tasks">
                    <h3>TASKS</h3>
                    <ul>
                        <li>
                            <Link to="/upcoming">
                                <span class="material-symbols-outlined">event_upcoming</span>  
                                Upcoming
                            </Link>
                            <span>12</span>
                        </li>
                        <li>
                            <Link to="/today">
                                <span class="material-symbols-outlined">checklist</span>
                                Today
                            </Link>
                            <span>12</span>
                        </li>
                        <li>
                            <Link to="/calandar">
                            <span class="material-symbols-outlined">calendar_month</span>
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
                    <div>  <span class="material-symbols-outlined">add</span>Add New List</div> 
                </div>
                <div className="tags">
                    <div className='tags__header'>
                    <h3>TAGS</h3>
                    <span class="material-symbols-outlined">add</span>
                    </div>
                    <ul>
                        <li>Tag 1</li>
                        <li>Tag 2</li>
                        <li>Tag 3</li>                      
                    </ul>
                </div>
                <div className='side-nav__settings'>
                    <Link to="/settings">
                    <span class="material-symbols-outlined">tune</span> 
                    Settings
                    </Link>
                </div>
                
            </aside>
        </div>
    )
}
export default SideNav;