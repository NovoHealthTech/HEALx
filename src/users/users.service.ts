import { Injectable, NotFoundException } from "@nestjs/common"
import type { Repository } from "typeorm"
import type { User } from "./entities/user.entity"
import type { CreateUserDto } from "./dto/create-user.dto"

@Injectable()
export class UsersService {
  private usersRepository: Repository<User>

  constructor(usersRepository: Repository<User>) {
    this.usersRepository = usersRepository
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto)
    return this.usersRepository.save(user)
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } })
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ where: { id } })
    if (!user) {
      throw new NotFoundException("User not found")
    }
    return user
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({
      select: ["id", "email", "firstName", "lastName", "role", "createdAt"],
    })
  }
}
