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

    @Output() activate = new EventEmitter();
    @Output() selectChange = new EventEmitter();

    @ViewChild('gallery') galleryElement;
    @ViewChild('pswp') pswpElement;

    private gallery;
    private collection;

    @Input() set images(images) {
        this.collection = images;
        if (this.gallery && images && images.constructor === Array || images === null) {
            this.gallery.collection = images;
        }
    }

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
            if (this.collection && this.collection.length) {
                this.gallery.collection = this.collection;
            }
        });
    }

    public unselectAll() {
        this.gallery.unselectAll();
    }

    ngOnChanges() {
        // console.log('change', this.images ? this.images.length : null);
    }

}
