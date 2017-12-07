import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
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

    @Input() options;
    @Input() scrollable;
    @Input() images: any[] = [];

    @Output() navigate = new EventEmitter();

    @ViewChild('gallery') gallery;
    @ViewChild('pswp') pswp;

    constructor() {
    }

    ngOnInit() {

        setTimeout(() => {
            const data = {
                options: this.options,
                events: {
                    link: {
                        preventDefault: true,
                        callback: (item) => {
                            this.navigate.emit(item);
                        },
                    },
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
