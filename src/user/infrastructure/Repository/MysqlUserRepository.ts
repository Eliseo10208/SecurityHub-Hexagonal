import UserModel  from './models/UserModel';
import { User } from '../../domain/Entities/User';
import { UserRepository } from '../../domain/Interface/UserRepository';
import { EncryptionService } from '../services/EncryptionService';

export class MysqlUserRepository implements UserRepository {
  async createUser(user: User): Promise<User> {
    const newUser = await UserModel.create({
      name: user.name,
      lastName: user.lastName,
      mail: user.mail,
      password: user.password,
      phone: user.phone,
      home: user.home
    });

    return new User(
      newUser.get('id') as number,
      newUser.get('name') as string,
      newUser.get('lastName') as string,
      newUser.get('mail') as string,
      newUser.get('password') as string,
      newUser.get('phone') as string,
      newUser.get('home') as string
    );
  }

  async deleteUser(id: number): Promise<void> {
    await UserModel.destroy({
      where: { id }
    });
  }

  async getAllUsers(): Promise<User[]> {
    const users = await UserModel.findAll();
    return users.map(user => new User(
      user.get('id') as number,
      user.get('name') as string,
      user.get('lastName') as string,
      user.get('mail') as string,
      user.get('password') as string,
      user.get('phone') as string,
      user.get('home') as string
    ));
  }

  async authenticateUser(email: string, password: string): Promise<User | null> {
    const user = await UserModel.findOne({ where: { mail: email } });
    if (user) {
        const hashedPassword = user.get('password') as string;  // Uso de get() con casting de tipo
        const passwordIsValid = await EncryptionService.comparePasswords(password, hashedPassword);
        if (passwordIsValid) {
            return new User(
                user.get('id') as number,
                user.get('name') as string,
                user.get('lastName') as string,
                user.get('mail') as string,
                user.get('password') as string,
                user.get('phone') as string,
                user.get('home') as string
            );
        }
    }
    return null;
}

  async getUserById(id: number): Promise<User | null> {
    const user = await UserModel.findByPk(id);
    if (!user) return null;

    return new User(
      user.get('id') as number,
      user.get('name') as string,
      user.get('lastName') as string,
      user.get('mail') as string,
      user.get('password') as string,
      user.get('phone') as string,
      user.get('home') as string
    );
  }

  async updateUserPassword(id: number, newPassword: string): Promise<void> {
    const hashedPassword = await EncryptionService.hashPassword(newPassword);
    await UserModel.update({ password: hashedPassword }, { where: { id } });
}

async updateUserProfile(id: number, updatedData: Partial<User>): Promise<void> {
  await UserModel.update(updatedData, {
      where: { id }
  });
}

}
