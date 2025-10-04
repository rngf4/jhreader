import { db, users } from "@jhreader/database";

async function main() {
  const allUsers = await db.select().from(users);

  console.log(allUsers)
}

main().catch(console.error);
