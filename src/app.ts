import express from "express";
import config from "./config/index";

export async function startServer() {
	const app = express();

	(await import("./loaders")).default({ app });

	app
		.listen(config.port, () => console.log(`Server is running ${config.port}`))
		.on("error", (error) => {
			console.log(error.message);
			process.exit(1);
		});
}

startServer();
