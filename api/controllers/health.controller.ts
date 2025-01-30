import { Request, Response } from 'express';
import mongoose from 'mongoose';

export const healthCheck = (req: Request, res: Response) => {

    const dbState = mongoose.connection.readyState;
    const dbStatusMap: Record<number, string> = {
        0: 'disconnected',
        1: 'connected',
        2: 'connecting',
        3: 'disconnecting',
    };

    res.status(200).json({
        success: true,
        message: 'Server is running',
        data: {
            database: {
                connected: dbState === 1,
                state: dbState,
                status: dbStatusMap[dbState] || 'unknown'
            },
        },
    });
};
