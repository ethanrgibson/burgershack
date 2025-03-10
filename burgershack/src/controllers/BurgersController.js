import { burgerService } from "../services/BurgerService.js"
import BaseController from "../utils/BaseController.js"

export class BurgersController extends BaseController {

  constructor() {

    super('api/burgers')

    this.router
      .get('', this.getBurgers)

  }

  async getBurgers(request, response, next) {

    try {
      const burgers = await burgerService.getBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(response, request, next) {

    try {

    } catch (error) {
      next(error)
    }



  }




}