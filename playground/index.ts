/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NaturalGalleryModule } from 'angular-natural-gallery';

@Component({
    selector: 'app-root',
    template: `Test : <natural-gallery></natural-gallery>`,
})
class AppComponent {
}

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NaturalGalleryModule,
    ],
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
