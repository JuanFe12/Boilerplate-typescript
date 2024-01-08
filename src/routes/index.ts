import { Router } from "express";
import userRoutes from "./joinus/joinus";

export default function server() {
	const app = Router();
	userRoutes(app);
	return app;
}
