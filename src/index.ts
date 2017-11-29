import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturalGalleryComponent } from './gallery/gallery.component';
import { OrganizerService } from './services/organizer.service';

export * from './gallery/gallery.component';

export * from './services/organizer.service';

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
            providers: [OrganizerService],
        };
    }
}
