import { Injectable, Module } from '@nestjs/common';
import { EncryptService as iEncryptService } from '../../../libs/encrypt/src/encrypt.service';

@Injectable()
export class EncryptService extends iEncryptService {}

@Module({
  providers: [EncryptService],
  exports: [EncryptService],
})
export class EncryptModule {}
