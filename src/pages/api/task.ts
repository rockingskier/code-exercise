import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../prisma';
import { Task } from '@prisma/client';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // NOTE: This should be a POST request on `/api/task`
    if (req.method !== 'POST') return res.status(405);

    // TODO: Validate incoming payload
    const data = req.body as { body: string };

    if (!data.body.length) {
        // Can't have a task with no body
        return res.status(400) // 422?
    }

    const newTask = {
        body: data.body,
        completed: false,
    } satisfies Omit<Task, 'id'>; // Omit `id` because it hasn't been saved yet and so won't have one

    const task = await prisma.task.create({ data: newTask });
    res.status(200).json({ task });
}