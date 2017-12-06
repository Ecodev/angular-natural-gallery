import { Component, Input, OnChanges, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Gallery } from 'natural-gallery-js';

@Component({
    selector: 'natural-gallery',
    templateUrl: 'gallery.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './gallery.component.scss',
    ],
})
export class NaturalGalleryComponent implements OnInit, OnChanges {

    @ViewChild('gallery') gallery;
    @ViewChild('pswp') pswp;

    @Input() scrollable;
    @Input() images: any[] = [];

    constructor() {
    }

    ngOnInit() {

        setTimeout(() => {
            const data = {
                options: {
                    margin: 5,
                },
            };

            document.getElementsByTagName('body')[0].appendChild(this.pswp.nativeElement);
            const gallery = new Gallery(this.gallery.nativeElement, this.pswp.nativeElement, data, this.scrollable);

            if (this.images && this.images.length) {
                gallery.images = this.images;
            }
        });
    }

    ngOnChanges() {
    }

}
