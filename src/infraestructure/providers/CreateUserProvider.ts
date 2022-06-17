import { User } from "../../domain/entities/user";
import { IUserGateway } from "../../domain/gateways/user_gateway";

class CreateUserProvider implements IUserGateway {
    constructor(
    ){}
    
    async getUser(id: string): Promise<User> {
        const user = User.create("email@teste.01", "123456", "teste");
        return user;
    }
}

export { CreateUserProvider }