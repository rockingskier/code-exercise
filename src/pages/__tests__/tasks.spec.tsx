import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Tasks from '../tasks'

test('Tasks', () => {
    render(<Tasks tasks={[]} />)
    expect(screen.getByRole('heading', { level: 2, name: 'Your Tasks' })).toBeDefined()
})
