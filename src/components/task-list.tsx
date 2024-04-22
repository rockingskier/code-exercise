import { Task } from "@prisma/client";
import { TaskItem } from "./task";

export const TaskList = ({ tasks, toggleStatus }: { tasks: Task[], toggleStatus: (task: Task) => Promise<void> }) => (
    <ul>
        {tasks.map(task => (
            <li key={task.id}>
                <TaskItem
                    task={task}
                    toggleStatus={toggleStatus}
                />
            </li>
        ))}
    </ul>
)