import express from 'express'
import fileUpload from 'express-fileupload'
import path from 'path'
const app = express()

// app.use(express.urlencoded({ extended: false }))
app.use(fileUpload())

//Upload Endpoint
app.post('/upload', (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ message: 'No files were uploaded.' })
    }

    const file = req.files.file
    const __dirname = path.resolve()
    file.mv(`${__dirname}/frontend/public/uploads/${file.name}`, err => {
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
    })

})


app.listen(5000, () => console.log('Server started at PORT 5000'))
