import type { Request, Response, NextFunction } from "express";

export function notFoundHandler(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const error = new Error(`path ${req.originalUrl} not found`);
	res.status(404);
	next(error);
}

export function globalErrorHandle(error: Error, req: Request, res: Response) {
	console.log(error.message);
	res.status(500);
	res.json({ error: { message: error.message } });
}
