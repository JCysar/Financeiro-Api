import { Router } from 'express'
import { login } from '../controlador/usuario.js'

export const rota = Router()



rota.get('/login', login())