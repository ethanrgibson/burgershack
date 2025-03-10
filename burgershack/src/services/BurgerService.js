import { dbContext } from "../db/DbContext.js"

class BurgerService {


  async getBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }

}


export const burgerService = new BurgerService()