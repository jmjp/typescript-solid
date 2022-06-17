import { CreateUserProvider } from "../../infraestructure/providers/CreateUserProvider";
import { UserRequest } from "../models/user/UserRequest";
import { UserResponse } from "../models/user/UserResponse";
import { IUseCase } from "./interfaces/IUseCase";

class CreateUserUseCase implements IUseCase{
    constructor(
        private createUserProvider: CreateUserProvider
    ){}
    
    async execute(request: UserRequest): Promise<UserResponse> {
        const id = request.id;
        const user = await this.createUserProvider.getUser(id);
        const response = new UserResponse();
        response.Data.id = user.id;
        response.Data.name = user.name;
        return response;

    }
    
}

export { CreateUserUseCase };