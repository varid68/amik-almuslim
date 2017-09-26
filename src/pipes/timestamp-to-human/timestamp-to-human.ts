import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/id';

/**
 * Generated class for the TimestampToHumanPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'timestampToHuman',
})
export class TimestampToHumanPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any) {
    let result = moment.unix(value).format('dddd, DD MMMM YYYY');
    return result;
  }
}
