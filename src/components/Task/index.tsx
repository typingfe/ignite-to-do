import { CheckCircle, Trash } from '@phosphor-icons/react'
import { Circle } from '@phosphor-icons/react/dist/ssr'
import { motion } from 'framer-motion'
import { Tasks } from '../Tasks'
import styles from './Task.module.css'

interface TasksProps {
    data: Tasks
    deleteTask: (id: string) => void
    toggleCompleteTask: ({ id, value }: { id: string; value: boolean }) => void
}

export const Task = ({ data, deleteTask, toggleCompleteTask }: TasksProps) => {
    const handleDeleteTask = () => {
        deleteTask(data.id)
    }

    const handleCompleteTask = () => {
        toggleCompleteTask({ id: data.id, value: !data.isCompleted })
    }

    const buttonCheckedClassName = data.isCompleted ? styles['circleButtonChecked'] : styles['circleButtonUnchecked']
    const paragraphCheckedClassName = data.isCompleted ? styles['paragraphChecked'] : ''

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 0.2 }}
            className={styles.task}
        >
            <div className={styles.taskInfo}>
                <button className={`${styles.circleButton} ${buttonCheckedClassName}`} onClick={handleCompleteTask}>
                    {data.isCompleted ? <CheckCircle weight="fill" size={24} /> : <Circle size={24} />}
                </button>
                <p className={`${styles.taskParagraph} ${paragraphCheckedClassName}`}>{data.task}</p>
            </div>

            <button onClick={handleDeleteTask}>
                <Trash size={24} />
            </button>
        </motion.div>
    )
}
