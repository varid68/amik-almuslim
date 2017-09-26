var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
/**
 * Generated class for the ImageCommentPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var ImageCommentPipe = (function () {
    function ImageCommentPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ImageCommentPipe.prototype.transform = function (value) {
        if (value == null || value == undefined || value == 'none') {
            return './assets/img/avatar-comment.jpg';
        }
        else {
            return value;
        }
    };
    return ImageCommentPipe;
}());
ImageCommentPipe = __decorate([
    Pipe({
        name: 'imageComment',
    })
], ImageCommentPipe);
export { ImageCommentPipe };
//# sourceMappingURL=image-comment.js.map