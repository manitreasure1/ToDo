
import styles from '../main.module.css'


export function Home(){
    return(
        <div>
            <h1 className={styles.home_h1}>Home Page</h1>
            <div className={styles.container}>
                <div className={styles.add_card}>
                    <span onClick={{}} class="material-symbols-outlined">add</span>
                </div>               
            </div>
        </div>      
    )
}

export function Upcoming(){
    return(
        <h1>Upcoming</h1>
    )
}
export function Today(){
    return(
        <h1>
            Today
        </h1>
    )
}
export function Calandar(){
    return(
        <h1>
            calandar
        </h1>
    )
}
export function Settings(){
    return(
        <h1>
            Settings
        </h1>
    )
}
