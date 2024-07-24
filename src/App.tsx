import styles from './App.module.css'
import { Task } from './components/Input/Task'

import './global.css'

function App() {
    return (
        <div>
            <header className={styles.header}>
                <img src="/public/logo-todo.svg" alt="To-Do logo" />
            </header>

            <div className={styles.wrapper}>
                <main>
                    <Task />
                </main>
            </div>
        </div>
    )
}

export default App
