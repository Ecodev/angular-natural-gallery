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
    @Input() images: any[] = [];

    constructor() {
    }

    ngOnInit() {
        const data = {options: {}};
        const gallery = new Gallery(this.gallery.nativeElement, this.pswp.nativeElement, data);

        if (this.images && this.images.length) {
            gallery.images = this.images;
        }
    }

    ngOnChanges() {
    }

}
