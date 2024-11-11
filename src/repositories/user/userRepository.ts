import pool from "../../database/db";
import { User } from "../../models/users/users";

export class UserRepository {
  public async getAllUsers(): Promise<User[]> {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  }

  public async getUserById(userId: number): Promise<User | null> {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);
    return result.rows[0] || null;
  }
}
