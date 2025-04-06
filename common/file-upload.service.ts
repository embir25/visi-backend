// common/services/file-upload.service.ts
import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Injectable()
export class FileUploadService {
  static imageStorage = diskStorage({
    destination: './uploads',  // Directory where images will be stored
    filename: (req, file, callback) => {
      const fileExtension = extname(file.originalname);
      const fileName = `${Date.now()}${fileExtension}`;
      callback(null, fileName);
    },
  });
}
