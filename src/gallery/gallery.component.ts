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

    @Output() activate = new EventEmitter();
    @Output() selectChange = new EventEmitter();

    @ViewChild('gallery') galleryElement;
    @ViewChild('pswp') pswpElement;

    private gallery;

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
                            this.activate.emit(item);
                        },
                    },
                    select: (items) => {
                        this.selectChange.emit(items);
                    },
                },
            };

            document.getElementsByTagName('body')[0].appendChild(this.pswpElement.nativeElement);
            this.gallery = new Gallery(this.galleryElement.nativeElement, this.pswpElement.nativeElement, data, this.scrollable);

            if (this.images && this.images.length) {
                this.gallery.images = this.images;
            }
        });
    }

    public unselectAll() {
        this.gallery.unselectAll();
    }

    ngOnChanges() {
    }

}
