import { burgerService } from "../services/BurgerService.js"
import BaseController from "../utils/BaseController.js"

export class BurgersController extends BaseController {

  constructor() {

    super('api/burgers')

    this.router
      .get('', this.getBurgers)
      .post('', this.createBurger)
      .delete('/:burgerId', this.removeBurger)

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
      const burgerToDelete = await burgerService.deleteBurger()
    } catch (error) {
      next(error)
    }



  }


}