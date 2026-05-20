const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve(__dirname, "..", "..", "public", "uploads"))
    },
    filename: function (req, file, callback) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
        callback(null, uniqueSuffix + path.extname(file.originalname))
    }
})

const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, callback) => {
        callback(null, true)
    }
}).single('imagem')

// Middleware customizado para lidar com multer opcionalmente
const multerMiddleware = (req, res, next) => {
    upload(req, res, (err) => {
        // Ignora erro de campo não encontrado
        if (err && err.code === 'LIMIT_PART_COUNT') {
            return res.status(400).json({ erro: 'Muitos campos' })
        }
        next()
    })
}

module.exports = multerMiddleware