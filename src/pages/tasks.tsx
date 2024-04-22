
import { Task } from '@prisma/client';
import { prisma } from '../prisma';

export async function getServerSideProps() {
    const tasks = await prisma.task.findMany()

    return {
        props: { tasks }
    }
}

export default function Tasks({ tasks }: { tasks: Task[] }) {
    return (
        <>
            <h2>Your Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.body}</li>
                ))}
            </ul>
        </>
    );
}