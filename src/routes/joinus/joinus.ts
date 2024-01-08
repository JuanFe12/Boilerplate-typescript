import { Router } from "express";
import usersRoute from "./users";

export default function joinus(app: Router) {
	const route = Router();
	app.use("/joinus", route);
	usersRoute(route);
	return route;
}
