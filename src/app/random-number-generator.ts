export interface RandomNumberGenerator {
  readonly name: string;
  readonly infoUrl: string;
  next (state: any): {state: any, value: number};
  reset (seed?: any): any;
}

