
import { Task } from '@prisma/client';
import { prisma } from '../prisma';
import { ChangeEvent, FormEvent, useState } from 'react';
import { NoTasks } from '@/components/no-tasks';
import { TaskList } from '@/components/task-list';
import { NewTaskForm } from '@/components/new-task-form';

export async function getServerSideProps() {
    const tasks = await prisma.task.findMany()

    return {
        props: { tasks }
    }
}

type Filter = 'all' | 'active' | 'complete'

export default function Tasks({ tasks: initialTasks }: { tasks: Task[] }) {
    const [filter, setFilter] = useState<Filter>('all');

    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const filteredTasks = filter === 'all' ? tasks : tasks.filter((task) => filter === 'complete' ? task.completed : !task.completed)

    // TODO: Move to the form itself.  Convert to a hook?
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        // TODO: Consider Loading state? It's probably not needed with the current speed
        event.preventDefault();

        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/api/task', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        // TODO: Error handling
        const { task: newTask } = await response.json() as { task: Task };

        setTasks((currentTasks) => [...currentTasks, newTask]);
    }

    // TODO: Move this
    // * I don't like the prop drilling (among other things)
    async function toggleStatus(task: Task) {
        // Pro-actively update the client status on the assumption that it will succeed
        setTasks((currentTasks) => currentTasks.map((existingTask) => {
            if (existingTask.id !== task.id) return existingTask;

            return {
                ...existingTask,
                completed: !task.completed
            }
        }));

        await fetch(`/api/task/${task.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                completed: !task.completed
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        // TODO: Error handling - revert the UI etc
    }

    // TODO: Move this
    // * I don't like the prop drilling (among other things)
    async function onDelete(task: Task) {
        // Pro-actively update the client status on the assumption that it will succeed
        setTasks((currentTasks) => currentTasks.filter((existingTask) => existingTask.id !== task.id));

        await fetch(`/api/task/${task.id}`, {
            method: 'DELETE',
        });

        // TODO: Error handling - revert the UI etc
    }

    function onFilterChange(event: ChangeEvent<HTMLSelectElement>) { setFilter(event.target.value as Filter) };

    return (
        <>
            <h2>Your Tasks</h2>
            <select name="filters" id="filters" onChange={onFilterChange}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="complete">Complete</option>
            </select>
            {tasks.length ?
                <TaskList
                    deleteTask={onDelete}
                    tasks={filteredTasks}
                    toggleStatus={toggleStatus}
                /> :
                <NoTasks />}
            <NewTaskForm onSubmit={onSubmit} />
        </>
    );
}