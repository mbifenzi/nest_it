import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { User, Watchlist } from '@prisma/client';

@Injectable({})
export class AuthService {
  constructor(private Prisma: PrismaService) {}
  signin() {
    return 'signin';
  }

  signup() {
    return 'signup';
  }
}
