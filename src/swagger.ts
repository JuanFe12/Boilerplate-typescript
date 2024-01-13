import swaggerAutogen from "swagger-autogen";

const doc = {
	info: {
		version: "v1.0.0",
		title: "Swagger Demo Project",
		description: "Implementation of Swagger with TypeScript",
	},
	servers: [
		{
			url: "http://localhost:3000/api",
			description: "",
		},
	],
	components: {
		securitySchemes: {
			bearerAuth: {
				type: "http",
				scheme: "bearer",
			},
		},
	},
};

const endpointsFiles = ["./src/routes/index.ts"];
const outputFile = "./swagger_output.json";

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
