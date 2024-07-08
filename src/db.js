import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Bitcoin*24',
    database: 'bd_puntilas'
  });