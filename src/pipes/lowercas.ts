import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Lowercase pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'lowercas'
})
@Injectable()
export class Lowercas {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
    return value.toLowerCase() + " JEC";
  }
}
