// auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity'; // Adjust path if necessary
import { UserService } from '../user/user.service'; // Optional if you're using a separate UserService


@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Ensure User repository is available here
    JwtModule.register({
      secret: 'Test@123', // Replace with your actual secret key
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService ], // Add UserService if you have it, otherwise just AuthService
})

export class AuthModule {}
