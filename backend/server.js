import express from 'express'
import fileUpload from 'express-fileupload'

const app = express()

app.use(fileUpload())

app.listen(5000, () => console.log('Server started...'))
