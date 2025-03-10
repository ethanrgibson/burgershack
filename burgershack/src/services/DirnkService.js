import { dbContext } from "../db/DbContext.js"

class DrinkService {



  async getDrinks() {
    const drinks = await dbContext.Drinks.find()
    return drinks
  }




}


export const drinkService = new DrinkService()