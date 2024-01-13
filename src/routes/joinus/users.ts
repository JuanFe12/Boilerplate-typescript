import swaggerJSDoc = require("swagger-jsdoc");
import swaggerUi from "swagger-ui-express";
import { Router, Request, Response } from "express";
import path from "path";

export default function (app: Router) {
	const route = Router();
	const swaggerSpec = {
		definition: {
			openapi: "3.0.0",
			info: {
				title: "Boilerplate-typescript",
				version: "1.0.0",
			},
			servers: [
				{
					url: "http://localhost:3000:dev/joinus",
				},
			],
		},
		apis: [`${path.join(__dirname, "../../routes/joinus/*.ts")}`],
	};
	app.use("/user", route);
	app.use(
		"/api-docs",
		swaggerUi.serve,
		swaggerUi.setup(swaggerJSDoc(swaggerSpec)),
	);
	app.get("/", (req: Request, res: Response) => {
		res.send("Welcome to my api");
	});

	return route;
}
