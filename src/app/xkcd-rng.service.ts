import {Injectable} from '@angular/core';
import {RandomNumberGenerator} from './random-number-generator';

@Injectable()
export class XkcdRngService implements RandomNumberGenerator {
  readonly infoUrl = 'https://xkcd.com/221/';
  readonly name = 'XKCD Random Number Generator';

  reset() {
    return null;
  }

  next(state: any = null) {
    return {state, value: 4};
  }
}

