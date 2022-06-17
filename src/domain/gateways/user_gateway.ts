import { User } from "../entities/user";

interface IUserGateway {
    getUser(id: string): Promise<User>;
}

export { IUserGateway };