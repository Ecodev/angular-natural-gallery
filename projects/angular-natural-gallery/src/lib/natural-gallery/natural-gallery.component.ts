import {Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {ModelAttributes, Natural} from '@ecodev/natural-gallery-js';
import {DOCUMENT} from '@angular/common';

/** @dynamic */
@Component({
    selector: 'natural-gallery',
    templateUrl: 'natural-gallery.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./natural-gallery.component.scss'],
})
export class NaturalGalleryComponent implements OnInit {
    @Input() public options;
    @Input() public scrollable;

    @Output() public activate = new EventEmitter();
    @Output() public select = new EventEmitter();
    @Output() public pagination = new EventEmitter();
    @Output() public zoom = new EventEmitter();

    @ViewChild('gallery', {static: true}) private galleryElement;
    @ViewChild('pswp', {static: true}) private pswpElement;

    public gallery: Natural;

    private _items: ModelAttributes[];

    @Input() set items(items: ModelAttributes[]) {
        this._items = items;
        if (this.gallery) {
            this.gallery.setItems(items);
        }
    }

    constructor(@Inject(DOCUMENT) private readonly document: Document) {}

    public ngOnInit(): void {
        setTimeout(() => {
            // Moves the PhotoSwipe template to body to prevent layout to be behind or hidden (because overflow) on a parent scrollable div
            this.document.getElementsByTagName('body')[0].appendChild(this.pswpElement.nativeElement);
            this.gallery = new Natural(
                this.galleryElement.nativeElement,
                this.options,
                this.pswpElement.nativeElement,
                this.scrollable,
            );
            this.gallery.init();

            this.gallery.addEventListener('zoom', ev => {
                this.zoom.emit(ev.detail);
            });

            this.gallery.addEventListener('select', ev => {
                this.select.emit(ev.detail);
            });

            this.gallery.addEventListener('activate', ev => {
                this.activate.emit(ev.detail);
            });

            this.gallery.addEventListener('pagination', ev => {
                this.pagination.emit(ev.detail);
            });

            if (this._items && this._items.length) {
                this.gallery.setItems(this._items);
            }
        });
    }
}
