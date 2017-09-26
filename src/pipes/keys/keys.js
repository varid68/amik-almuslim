var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/id';
/**
 * Generated class for the KeysPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var KeysPipe = (function () {
    function KeysPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    KeysPipe.prototype.transform = function (time) {
        if (time.includes(':')) {
            return 'no date';
        }
        else {
            var result = moment.unix(time).format('DD MMM YYYY HH:mm');
            return result;
        }
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    Pipe({
        name: 'timestamps',
    })
], KeysPipe);
export { KeysPipe };
//# sourceMappingURL=keys.js.map