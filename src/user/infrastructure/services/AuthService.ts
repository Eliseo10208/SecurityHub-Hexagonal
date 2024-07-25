import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export class AuthService {
  static generateToken(user: any): string {
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        lastname: user.lastName,
        mail: user.mail,
        phone: user.phone,
        home: user.home

        // Pendiente agregar más campos del usuario
      },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );
    return token;
  }

}
