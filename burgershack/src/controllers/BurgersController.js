import { burgerService } from "../services/BurgerService.js"
import BaseController from "../utils/BaseController.js"

export class BurgersController extends BaseController {

  constructor() {

    super('api/burgers')

    this.router
      .get('', this.getBurgers)
      .post('', this.createBurger)
      .delete('/:burgerId', this.removeBurger)
      .put('/:burgerId', this.updateBurger)

  }

  async getBurgers(request, response, next) {

    try {
      const burgers = await burgerService.getBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(request, response, next) {

    try {
      const burgerData = request.body
      const burger = await burgerService.createBurger(burgerData)
      response.send(burger)

    } catch (error) {
      next(error)
    }
  }

  async removeBurger(request, response, next) {

    try {
      const burgerId = request.params.burgerId
      const burgerToDelete = await burgerService.deleteBurger(burgerId)

      response.send(burgerToDelete)
    } catch (error) {
      next(error)
    }
  }

  async updateBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId
      const updatedContent = request.body
      const newBurger = await burgerService.updatedBurger(burgerId, updatedContent)

      response.send(newBurger)
    } catch (error) {
      next(error)
    }




  }

}