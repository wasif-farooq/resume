import {Controller, Get, Post, UseGuards, Request} from '@nestjs/common';
import { AuthService } from "./app/auth/auth.service";
import {LocalAuthGuard} from "./app/auth/guard/local-auth.guard";

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);

  }
}
