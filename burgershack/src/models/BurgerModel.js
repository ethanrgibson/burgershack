import { Schema } from "mongoose";

export const BurgerSchema = new Schema({

  name: { type: String, maxLength: 50 },
  price: { type: Number, max: 6000 },

})

export const DrinkSchema = new Schema({

  name: { type: String, maxLength: 50 },
  price: { type: Number, max: 6000 },

})