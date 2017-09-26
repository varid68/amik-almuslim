import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ImageCommentPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'imageComment',
})
export class ImageCommentPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    if (value == null || value == undefined || value == 'none'){
      return './assets/img/avatar-comment.jpg';
    } else {
      return value;
    }
  }
}
