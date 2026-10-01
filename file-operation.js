import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const filename = process.env.FILENAME;
const dirName = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(dirName, filename);

fs.writeFile(filePath, 'Hallo zusammen!', 'utf-8', (err) => {
  if (err) {
    return console.error('Ошибка при записи в файл');
  }
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.error('Ошибка чтения директории');
    }
    console.log(data);
  });
});
