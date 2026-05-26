export class Database {
  constructor() {
    throw new Error('better-sqlite3 is not supported in the Cloudflare Worker environment');
  }
}
export class PrismaBetterSqlite3 {
  constructor() {
    throw new Error('@prisma/adapter-better-sqlite3 is not supported in the Cloudflare Worker environment');
  }
}
export default Database;
