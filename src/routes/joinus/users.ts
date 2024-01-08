import { Router } from 'express'

export default function (app: Router){
    const route = Router()
    app.use('/user', route)

    route.get('/', async (req, res, next) =>{
        res.send('Hi')
        
    })
    return route
}