import mongoose, { mongo } from 'mongoose'
import { BurgerSchema, DrinkSchema } from '../models/BurgerModel.js'


class DbContext {
  Burgers = mongoose.model('Buger', BurgerSchema)

  Drinks = mongoose.model('Drink', DrinkSchema)

}

export const dbContext = new DbContext()
