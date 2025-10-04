import { defineConfig } from "drizzle-kit";
import { dbConfig } from "./src/config";

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: dbConfig,
});