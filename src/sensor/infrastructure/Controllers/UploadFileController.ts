import { Request, Response } from 'express';
import multer, { MulterError } from 'multer';
import upload from '../services/UploadService';
import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';

class UploadFileController {

  private readonly apiUrl = process.env.WATI_API_URL;
  private readonly apiToken = process.env.WATI_API_TOKEN;

  public uploadFile = (req: Request, res: Response): void => {
    upload.single('file')(req, res, (err: any) => {
      if (err instanceof MulterError) {
        res.status(400).json({ message: err.message });
      } else if (err) {
        res.status(400).json({ message: err.message });
      } else {
        res.status(200).json({ message: 'Archivo subido con éxito', file: req.file });
      }
    });
  }
  
  public uploadFileWhats = (req: Request, res: Response, next: Function): void => {
    upload.single('file')(req, res, (err: any) => {
      if (err instanceof MulterError) {
        res.status(400).json({ message: err.message });
      } else if (err) {
        res.status(400).json({ message: err.message });
      } else {
        next(); // Pasar al siguiente middleware/handler si no hay errores
      }
    });
  }


  public sendMessageFile = async (req: Request, res: Response): Promise<void> => {
  const { whatsappNumber, caption } = req.params;
  const filePath = req.file?.path;

  if (!whatsappNumber || !caption || !filePath) {
    res.status(400).json({ message: 'Número de WhatsApp, leyenda y archivo son requeridos' });
    return;
  }

  const form = new FormData();
  form.append('file', fs.createReadStream(filePath));

  const options = {
    method: 'POST',
    url: `${this.apiUrl}/sendMessageWithMedia/${whatsappNumber}/${encodeURIComponent(caption)}`,
    headers: {
      'Authorization': `${this.apiToken}`,
      ...form.getHeaders(),
    },
    data: form,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Error al enviar el archivo', error: error.message });
  } finally {
    // Eliminar el archivo local después de enviarlo
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
};
}


export default new UploadFileController();
