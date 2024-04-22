import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../prisma';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {

        switch (req.method) {
            case 'PUT': {
                const { tid } = req.query
                const taskId = Array.isArray(tid) ? tid[0] : tid;

                // TODO: Validate incoming payload
                const data = req.body as { completed: boolean };

                const task = await prisma.task.update({
                    where: {
                        id: taskId,
                    },
                    data: {
                        completed: data.completed,
                    },
                });
                return res.status(200).json({ id: task.id });
            }
            case 'DELETE': {
                const { tid } = req.query
                const taskId = Array.isArray(tid) ? tid[0] : tid;

                await prisma.task.delete({
                    where: {
                        id: taskId,
                    },
                });
                return res.send(200);
            }
            default: {
                return res.send(502);
            }
        }
    } catch (error) {
        return res.send(500);
    }
}