import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../prisma';

const getTaskIdFromQuery = (query: NextApiRequest['query']) => {
    const { tid } = query
    return Array.isArray(tid) ? tid[0] : tid;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        switch (req.method) {
            case 'PUT': {
                const taskId = getTaskIdFromQuery(req.query);

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
                    return res.send(500);
                }
            }
            case 'DELETE': {
                const taskId = getTaskIdFromQuery(req.query);

                const a = await prisma.task.delete({
                    where: {
                        id: taskId
                    }
                });
                return res.send(200);
            }
            default: {
                return res.send(501);
            }
        }
    } catch (err) {
        console.log(err);
        return res.send(500);
    }
}