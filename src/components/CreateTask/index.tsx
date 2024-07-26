import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, InputHTMLAttributes } from 'react'
import styles from './CreateTask.module.css'

interface CreateTaskProps extends InputHTMLAttributes<HTMLInputElement> {
    handleTaskChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleCreateNewTask: (event: FormEvent) => void
}

export const CreateTask = ({ handleTaskChange, handleCreateNewTask, ...props }: CreateTaskProps) => {
    return (
        <form onSubmit={handleCreateNewTask} className={styles.createTask}>
            <input onChange={handleTaskChange} placeholder="Adicione uma nova tarefa" type="text" {...props} required />
            <button type="submit">
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    )
}
