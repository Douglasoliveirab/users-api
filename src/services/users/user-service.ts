import { UserRepository } from "../../repositories/user/userRepository";
import { User } from "../../models/users/users";

const userRepository = new UserRepository();

export class UserService {

  public async getAllUsers(): Promise<User[]> {
    return await userRepository.getAllUsers();
  }
  
}
