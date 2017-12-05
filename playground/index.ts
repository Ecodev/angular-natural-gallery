/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NaturalGalleryModule } from 'angular-natural-gallery';

@Component({
    selector: 'app-root',
    template: '<natural-gallery [images]="images"></natural-gallery>'
})
class AppComponent {

    public images;

    constructor() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'data.json');
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.images = JSON.parse(xhr.responseText);
            }
        };
    }
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
