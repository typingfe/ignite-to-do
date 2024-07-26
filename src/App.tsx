import styles from './App.module.css'
import { Tasks } from './components/Tasks'

import './global.css'

function App() {
    return (
        <div>
            <header className={styles.header}>
                <img src="/src/assets/logo-todo.svg" alt="To-Do logo" />
            </header>

            <div className={styles.wrapper}>
                <main>
                    <Tasks />
                </main>
            </div>
        </div>
    )
}

export default App
