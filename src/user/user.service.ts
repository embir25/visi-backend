// users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async findByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }
  

  async create(user: Partial<User>) {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }
}