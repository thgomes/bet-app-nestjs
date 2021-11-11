import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class AdminGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext): Request {
    const ctx = GqlExecutionContext.create(context);
    const token = ctx.getContext().req.headers.authorization;
    const payload: any = this.decodeTokenPlayload(token);
    console.log(payload);
    if (payload.profileId != '1') {
      throw new UnauthorizedException(
        'You need to be a admin to access this area.',
      );
    }

    return ctx.getContext().req;
  }

  private decodeTokenPlayload(token: string): string {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const buff = Buffer.from(base64, 'base64');
    const payloadinit = buff.toString('ascii');
    return JSON.parse(payloadinit);
  }
}
