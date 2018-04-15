import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturalGalleryComponent } from './natural-gallery/natural-gallery.component';
export { NaturalGalleryComponent };
export { Gallery } from '@ecodev/natural-gallery-js';

@NgModule({
    declarations: [
        NaturalGalleryComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        NaturalGalleryComponent,
    ],
})
export class NaturalGalleryModule {
}
