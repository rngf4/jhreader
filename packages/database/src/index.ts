import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import { dbConfig } from "./config";

const pool = new Pool(dbConfig);

export const db = drizzle(pool, { schema });
export * from "./schema";