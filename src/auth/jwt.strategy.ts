// auth/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service'; // Import your UserService

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'Test@123',
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findByEmail(payload.sub);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user; // Adds user object to the request
  }
}
