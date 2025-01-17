

// Crear servicio web - API
// En otras palabras levantar en express

import express from 'express'
import { routes } from './src/infrastructure/api/routes/index.routes'

const main = () => {

    const app = express()

    // Importante: Middleware para aceptar los json en los request
    app.use(express.json())

    app.use(routes())

    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log('Api reportes escuchando en: ', PORT);
    })
}

main()