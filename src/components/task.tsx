import { Task } from "@prisma/client";

import styles from './task.module.css';

export const TaskItem = ({
    deleteTask,
    task,
    toggleStatus
}: {
    deleteTask: (task: Task) => Promise<void>,
    task: Task,
    toggleStatus: (task: Task) => Promise<void>,
}) => {
    const statusId = `completed-${task.id}`;

    return <div className={styles.task}>
        <div className={styles.body}>{task.body}</div>
        <form>
            <label htmlFor={statusId}>Status</label>
            <input
                type="checkbox"
                id={statusId}
                name="completed"
                checked={task.completed}
                onChange={() => toggleStatus(task)}
            />
        </form>
        <button type="button" onClick={(event) => {
            event.preventDefault();
            deleteTask(task);
        }}>Delete</button>

    </div>
}