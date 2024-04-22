import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tasks from '../tasks'

test('Tasks: create', () => {
    const user = userEvent.setup();

    render(<Tasks tasks={[]} />);

    const input = screen.getByLabelText('New task');
    expect(input).toBeDefined();

    user.type(input, 'new task');

    // Submit form ()
    // user.type(input, '{enter}');
    user.click(screen.getByRole('button', { name: 'Add' }));

    // TODO: Check page for new task
    // QUESTION: This passes, but there is no new task.  Why?
    // TODO: Check the form has been cleared
})
