import { AppError } from "../../../../errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (user.admin === false) {
      throw new AppError("User not authorized", 400);
    }

    const userList = this.usersRepository.list();

    return userList;
  }
}

export { ListAllUsersUseCase };
