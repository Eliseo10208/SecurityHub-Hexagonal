import { Request, Response } from 'express';
import { AuthUserCase } from '../../application/MethodsUser/AuthUserCase';

export class AuthUserCaseController {
  constructor(private authUserCase: AuthUserCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
      const { mail, password } = req.body;

      if (!mail || !password) {
          return res.status(400).json({ message: "Email and password are required." });
      }

      try {
          const token = await this.authUserCase.execute(mail, password);
          if (token) {
              return res.status(200).json({ token });
          } else {
              return res.status(401).json({ message: "Invalid credentials" });
          }
      } catch (error) {
          console.error(error);
          return res.status(500).json({ message: "Internal server error" });
      }
  }
}