import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../prisma';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // NOTE: This should probably be a PUT request on `/api/task/[tid]`
    const { tid } = req.query
    const taskId = Array.isArray(tid) ? tid[0] : tid;

    // TODO: Validate incoming payload
    const data = req.body as { completed: boolean };

    try {
        const task = await prisma.task.update({
            where: {
                id: taskId,
            },
            data: {
                completed: data.completed,
            },
        });
        return res.status(200).json({ id: task.id });
    } catch {
        // TODO: Handle errors - 404 etc
        return res.status(500);
    }
}