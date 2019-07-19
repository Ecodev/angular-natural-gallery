import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Natural } from '@ecodev/natural-gallery-js';

@Component({
    selector: 'natural-gallery',
    templateUrl: 'natural-gallery.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./natural-gallery.component.scss'],
})
export class NaturalGalleryComponent implements OnInit {

    @Input() options;
    @Input() scrollable;

    @Output() activate = new EventEmitter();
    @Output() select = new EventEmitter();
    @Output() pagination = new EventEmitter();
    @Output() zoom = new EventEmitter();

    @ViewChild('gallery') galleryElement;
    @ViewChild('pswp') pswpElement;

    public gallery: Natural;

    private _items;

    @Input() set items(items) {
        this._items = items;
        if (this.gallery) {
            this.gallery.setItems(items);
        }
    }

    constructor() {
    }

    ngOnInit() {

        setTimeout(() => {
            this.gallery = new Natural(this.galleryElement.nativeElement, this.options, this.pswpElement.nativeElement, this.scrollable);

            this.gallery.addEventListener('zoom', (ev) => {
                this.zoom.emit(ev.detail);
            });

            this.gallery.addEventListener('select', (ev) => {
                this.select.emit(ev.detail);
            });

            this.gallery.addEventListener('activate', (ev) => {
                this.activate.emit(ev.detail);
            });

            this.gallery.addEventListener('pagination', (ev) => {
                this.pagination.emit(ev.detail);
            });

            if (this._items && this._items.length) {
                this.gallery.setItems(this._items);
            }
        });
    }

}