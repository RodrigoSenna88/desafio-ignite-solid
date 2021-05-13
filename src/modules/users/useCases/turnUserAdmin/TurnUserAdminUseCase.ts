import { AppError } from "../../../../errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError("User not found!", 404);
    }
    const turnUserAdmin = this.usersRepository.turnAdmin(userExists);

    return turnUserAdmin;
  }
}
export { TurnUserAdminUseCase };
