import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NaturalGalleryModule } from '../../src/natural-gallery-module/natural-gallery.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        NaturalGalleryModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
