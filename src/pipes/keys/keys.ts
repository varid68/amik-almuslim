import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/id';

/**
 * Generated class for the KeysPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'timestamps',
})
export class KeysPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(time: any): any {
    if (time.includes(':')){
      return 'no date'; 
    } else {
      let result = moment.unix(time).format('DD MMM YYYY • HH:mm');
      return result;
    }
  }
}
