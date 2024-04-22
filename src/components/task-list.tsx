import { Task } from "@prisma/client";
import { TaskItem } from "./task";

import styles from './task-list.module.css';

export const TaskList = ({
    deleteTask,
    tasks,
    toggleStatus
}: {
    deleteTask: (task: Task) => Promise<void>,
    tasks: Task[],
    toggleStatus: (task: Task) => Promise<void>,
}) => (
    <ul>
        {tasks.map(task => (
            <li key={task.id}>
                <TaskItem
                    deleteTask={deleteTask}
                    task={task}
                    toggleStatus={toggleStatus}
                />
            </li>
        ))}
    </ul>
)