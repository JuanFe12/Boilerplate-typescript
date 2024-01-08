import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_EMV || "development";
const envFound = dotenv.config();

if (envFound.error) {
	throw new Error("no .env file found");
}

export default {
	port: Number(process.env.PORT),
};
