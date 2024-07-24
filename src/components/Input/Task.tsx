import styles from './Task.module.css'

export const Task = () => {
    return (
        <div className={styles.task}>
            <input placeholder="Adicione uma nova tarefa" type="text" />
            <button>Criar</button>
        </div>
    )
}
