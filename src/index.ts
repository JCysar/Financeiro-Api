import { configDotenv } from 'dotenv'
import { app } from './server.js'

configDotenv()

const { PORT_API } = process.env

const port = process.env.PORT_API || 3001

app.listen(port, () => {
  console.log('Servidor rodando na porta:', port)
}) 