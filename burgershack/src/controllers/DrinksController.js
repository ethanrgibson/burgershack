import { drinkService } from "../services/DirnkService.js";
import BaseController from "../utils/BaseController.js";

export class DrinksController extends BaseController {

  constructor() {
    super('api/drinks')

    this.router
      .get('', this.getDrinks)


  }

  async getDrinks(request, response, next) {
    try {
      const drinks = await drinkService.getDrinks()

      response.send(drinks)
    } catch (error) {
      next(error)
    }



  }

}