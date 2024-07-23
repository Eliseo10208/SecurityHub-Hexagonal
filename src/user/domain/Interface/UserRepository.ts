import { User } from '../Entities/User';

export interface UserRepository {
  createUser(user: User): Promise<User>;
  deleteUser(id: number): Promise<void>;
  getAllUsers(): Promise<User[]>;
  authenticateUser(email: string, password: string): Promise<User | null>;
  getUserById(id: number): Promise<User | null>;
  updateUserPassword(id: number, newPassword: string): Promise<void>;
  updateUserProfile(id: number, updatedData: Partial<User>): Promise<void>;
}
