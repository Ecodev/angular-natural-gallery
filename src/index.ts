import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturalGalleryComponent } from './gallery/gallery.component';

export * from './gallery/gallery.component';
export { Gallery } from 'natural-gallery-js';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        NaturalGalleryComponent,
    ],
    exports: [
        NaturalGalleryComponent,
    ],
})
export class NaturalGalleryModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NaturalGalleryModule,
            providers: [],
        };
    }
}
