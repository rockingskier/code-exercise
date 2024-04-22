import { FormEvent } from "react";

export const NewTaskForm = ({ onSubmit }: { onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void> }) => <form onSubmit={onSubmit}>
    <label htmlFor="new-task-body">
        New task
        <input
            id="new-task-body"
            name="body"
            type="text"
            placeholder="Complete Purple Dot tech task"
            required
        />
    </label>
    <button type="submit">Add</button>
</form>