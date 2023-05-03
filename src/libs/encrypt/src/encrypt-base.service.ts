export abstract class AbstractEncryptService {
  abstract compare(item1: string, item2: string): Promise<boolean>;
  abstract hash(thing: string): Promise<string>;
}
