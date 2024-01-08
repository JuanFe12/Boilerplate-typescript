import { Router } from 'express'
import userRoutes from './joinus/joinus';

export default function (){
     const app = Router ();
     userRoutes(app)
     return app
}