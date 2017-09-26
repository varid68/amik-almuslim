import { NgModule } from '@angular/core';
import { KeysPipe } from './keys/keys';
import { ImageCommentPipe } from './image-comment/image-comment';
import { TimestampToHumanPipe } from './timestamp-to-human/timestamp-to-human';
@NgModule({
	declarations: [KeysPipe,
    ImageCommentPipe,
    TimestampToHumanPipe],
	imports: [],
	exports: [KeysPipe,
    ImageCommentPipe,
    TimestampToHumanPipe]
})
export class PipesModule {}
