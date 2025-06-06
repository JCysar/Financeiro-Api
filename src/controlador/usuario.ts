import { Request, Response } from 'express'


function login() {

}

 
export const login = async (req: Request, res: Response) => {
    const { email, senha } = req.body

    try {
        const loginValido = await encontrarLogin(email)
        if(!loginValido)
            return res.status(401).json({ message: 'Usuario ou senha inválido' })

        const usuario = await encontrarSenha(email,senha) // nome, id, imagemurl
       
        if(!usuario)
            return res.status(401).json({ message: 'Usuario ou senha inválido' })


        return res.status(200).json({mensagem: `Bem vindo ${usuario.nome}, você esta habilitado`})

    } catch (error) {
        return res.status(500).json({ message: 'Server Error' })
    }
}

