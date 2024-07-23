import { UserRepository } from '../../domain/Interface/UserRepository';
import { EncryptionService } from '../../infrastructure/services/EncryptionService';
import axios from 'axios';
import * as crypto from 'crypto';
import * as fs from 'fs';
import FormData from 'form-data';
import path from 'path';

export class UpdateUserPasswordUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(email: string): Promise<void> {
        const users = await this.userRepository.getAllUsers();
        const user = users.find(user => user.mail === email);
        
        if (!user) {
            throw new Error('User not found');
        }

        const newPassword = crypto.randomBytes(8).toString('hex'); // Genera una contraseña aleatoria
        const hashedPassword = await EncryptionService.hashPassword(newPassword);
        
        await this.userRepository.updateUserPassword(user.id, hashedPassword);

        const phone = user.phone;

        // Lee la imagen desde la ruta especificada
        const imagePath = path.join(__dirname, '../../../../images/LOGO1.png');
        if (!fs.existsSync(imagePath)) {
            throw new Error(`Image not found at ${imagePath}`);
        }
        const imageBuffer = fs.readFileSync(imagePath);

        const formData = new FormData();
        formData.append('file', imageBuffer, { filename: 'LOGO1.png' });

        // Construir la URL correctamente
        const url = `https://j8mhc3js-3001.usw3.devtunnels.ms/sendMessageWithMedia/521${phone}/${newPassword}`;

        try {
            await axios.post(url, formData, {
                headers: {
                    ...formData.getHeaders()
                }
            });
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error sending message:", error.message);
                throw new Error(`Error sending message: ${error.message}`);
            } else {
                console.error("An unknown error occurred");
                throw new Error("An unknown error occurred");
            }
        }
    }
}
