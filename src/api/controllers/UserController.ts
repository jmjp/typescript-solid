import { Request, Response } from 'express';
import { CreateUserUseCase } from "../../application/useCases/createUserUseCase";

class UserController{
    constructor(private createUserUseCase: CreateUserUseCase)
    {
        
    }

    async create(request: Request, response: Response){
        const userRequest = request.body;
        var user = await this.createUserUseCase.execute(userRequest)
        return response.json(user);
    }
}

export { UserController };