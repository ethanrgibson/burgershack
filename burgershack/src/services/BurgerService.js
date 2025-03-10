import { dbContext } from "../db/DbContext.js"

class BurgerService {
  async deleteBurger(burgerId) {
    const burgerToDelete = await dbContext.Burgers.findById(burgerId)
    if (burgerToDelete == null) {
      throw new Error('Burger Not Foudn');
    }
    await burgerToDelete.deleteOne()
    return 'burger deleted'

  }

  async getBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }

  async createBurger(burgerData) {
    const burger = await dbContext.Burgers.create(burgerData)
    return burger
  }
}


export const burgerService = new BurgerService()