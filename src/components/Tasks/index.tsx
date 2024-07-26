import { ClipboardText } from '@phosphor-icons/react'
import { v4 as uuidv4 } from 'uuid'
import { CreateTask } from '../CreateTask'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Task } from '../Task'
import styles from './Tasks.module.css'

export interface Tasks {
    id: string
    task: string
    isCompleted: boolean
}

export const Tasks = () => {
    const [task, setTask] = useState<string>('')
    const [taskList, setTaskList] = useState<Tasks[]>(() => {
        const storedTasks = localStorage.getItem('tasks')
        return storedTasks ? JSON.parse(storedTasks) : []
    })

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskList))
    }, [taskList])

    const completedTaskCount = taskList.reduce((prev, current) => {
        if (current.isCompleted) {
            return prev + 1
        }

        return prev
    }, 0)

    const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value)
    }

    const handleCreateNewTask = (event: FormEvent) => {
        event.preventDefault()

        const newTask = {
            id: uuidv4(),
            task: task,
            isCompleted: false,
        } as Tasks

        setTaskList((prevTaskList) => [...prevTaskList, newTask])
        setTask('')
    }

    const deleteTask = (id: string) => {
        const taskWithoutTheDeletedOne = taskList.filter((task) => task.id !== id)

        setTaskList(taskWithoutTheDeletedOne)
    }

    const toggleCompleteTask = ({ id, value }: { id: string; value: boolean }) => {
        const updatedTasks = taskList.map((task) => {
            if (task.id === id) {
                return { ...task, isCompleted: value }
            }

            return { ...task }
        })
        setTaskList(updatedTasks)
    }

    return (
        <div>
            <CreateTask value={task} handleCreateNewTask={handleCreateNewTask} handleTaskChange={handleTaskChange} />
            <div className={styles.tasksInfo}>
                <div className={styles.tasksCreated}>
                    <span>Tarefas criadas</span>
                    <span>{taskList.length}</span>
                </div>

                <div className={styles.tasksCompleted}>
                    <span>Concluídas</span>
                    <span>{taskList.length > 0 ? `${completedTaskCount} de ${taskList.length}` : 0}</span>
                </div>
            </div>

            <div className={styles.tasksContainer}>
                {taskList.length === 0 ? (
                    <div className={styles.tasksEmpty}>
                        <ClipboardText size={56} />
                        <p>
                            <strong>
                                Você ainda não tem tarefas cadastradas <br />
                            </strong>
                            Crie tarefas e organize seus itens a fazer
                        </p>
                    </div>
                ) : (
                    taskList.map((task) => (
                        <Task
                            key={task.id}
                            data={task}
                            toggleCompleteTask={toggleCompleteTask}
                            deleteTask={deleteTask}
                        />
                    ))
                )}
            </div>
        </div>
    )
}
