/* import chalk from 'chalk'
import text from './data.js'

import path from 'path'
import { fileURLToPath } from 'url'

console.log(chalk.blue(text))

const __filename = fileURLToPath(import.meta.url)
console.log('file-name', __filename)

const __dirname = path.dirname(__filename)
console.log('directory-name', __dirname)
 */
import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import fileUpload from 'express-fileupload'

const PORT = 5000
//https://account.mongodb.com
const DB_URL =
  'mongodb+srv://system:system@cluster0.uz4o4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

app.get('/hello', (req, resp) => {
  console.log(req.query)
  resp.status(200).json('Сервер работает')
})

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
  } catch (e) {
    console.log(e)
  }
}

startApp()
