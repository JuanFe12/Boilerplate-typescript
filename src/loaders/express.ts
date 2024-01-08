import express from "express";
import type { Express } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import indexRouter from "../routes/index";
import {
	notFoundHandler,
	globalErrorHandle,
} from "../routes/middlewares/error";

export default async function ({ app }: { app: Express }) {
	app.get("/status", (req, res) => res.sendStatus(200).end());
	app.head("/status", (req, res) => res.sendStatus(200).end());
	app.enable("trust proxy");

	app.use(
		helmet({
			contentSecurityPolicy: false,
		}),
	);

	app.use(cors());
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(morgan("dev"));
	app.use("/dev", indexRouter());
	app.use(notFoundHandler);
	app.use(globalErrorHandle);
}
