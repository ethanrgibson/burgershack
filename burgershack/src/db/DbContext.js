import mongoose, { mongo } from 'mongoose'
import { BurgerSchema } from '../models/BurgerModel.js'


class DbContext {
  Burgers = mongoose.model('Buger', BurgerSchema)
}

export const dbContext = new DbContext()
