import BaseController from "../utils/BaseController.js"

export class BurgersController extends BaseController {

  constructor() {

    super('api/burgers')

    this.router
      .get('', this.getTest)

  }

  async getTest(request, response, next) {

    try {

      response.send('burger test success')


    } catch (error) {
      next(error)

    }


  }

}