import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwtsecret',
    });
  }

  async validate(payload: { id: User['id']; name: string; profileId: string }) {
    const user = this.userService.findUserById(payload.id);

    if (!user) {
      throw new UnauthorizedException('Unauthorized');
    }

    return user;
  }
}
