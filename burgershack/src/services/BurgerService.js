import { dbContext } from "../db/DbContext.js"

class BurgerService {

  async updatedBurger(burgerId, updatedContent) {
    const burgerToUpdate = await dbContext.Burgers.findById(burgerId)
    if (burgerToUpdate == null) {
      throw new Error('Burger Not Found');
    }
    burgerToUpdate.name = updatedContent.name
    burgerToUpdate.price = updatedContent.price ?? burgerToUpdate.price

    await burgerToUpdate.save()
    return 'burger updating' + burgerToUpdate
  }

  async deleteBurger(burgerId) {
    const burgerToDelete = await dbContext.Burgers.findById(burgerId)
    if (burgerToDelete == null) {
      throw new Error('Burger Not Found');
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