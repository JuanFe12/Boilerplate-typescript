import expressLoadres from "./express";
import type { Express } from "express";

export default async function ({ app }: { app: Express }) {
	await expressLoadres({ app });
	console.log("express loaded");
}
