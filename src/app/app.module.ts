import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NaturalGalleryModule} from '@ecodev/angular-natural-gallery';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, BrowserAnimationsModule, NaturalGalleryModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
