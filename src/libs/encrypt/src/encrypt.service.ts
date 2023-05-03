import { AbstractEncryptService } from './encrypt-base.service';
import * as bcrypt from 'bcrypt';

export class EncryptService extends AbstractEncryptService {
  async compare(item1: string, item2: string): Promise<boolean> {
    return await bcrypt.compare(item1, item2);
  }
  async hash(thing: string): Promise<string> {
    return bcrypt.hash(thing, 10);
  }
}
