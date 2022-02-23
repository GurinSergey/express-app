import path from 'path'
import { fileURLToPath } from 'url'

console.log('Название файла:', fileURLToPath(path.basename(import.meta.url)))
