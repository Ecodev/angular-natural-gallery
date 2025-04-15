import {Component, ElementRef, Input, OnInit, viewChild, output} from '@angular/core';
import {CustomEventDetailMap, ModelAttributes, Natural, NaturalGalleryOptions} from '@ecodev/natural-gallery-js';

/** @dynamic */
@Component({
    selector: 'natural-gallery',
    templateUrl: './natural-gallery.component.html',
    standalone: true,
})
export class NaturalGalleryComponent<T extends ModelAttributes = ModelAttributes> implements OnInit {
    @Input({required: true}) public options!: NaturalGalleryOptions;
    @Input() public scrollable: HTMLElement | undefined | null;

    public readonly activate = output<CustomEventDetailMap<T>['activate']>();
    // eslint-disable-next-line @angular-eslint/no-output-native
    public readonly select = output<CustomEventDetailMap<T>['select']>();
    public readonly pagination = output<CustomEventDetailMap<T>['pagination']>();

    private readonly galleryElement = viewChild.required<ElementRef<HTMLElement>>('gallery');

    public readonly gallery: Promise<Natural<T>>;

    private resolve!: (value: Natural<T>) => void;

    private _items: T[] = [];

    @Input()
    public set items(items: T[]) {
        this._items = items;
        this.gallery.then(gallery => gallery.setItems(items));
    }

    public constructor() {
        this.gallery = new Promise<Natural<T>>(resolve => {
            this.resolve = resolve;
        });
    }

    public ngOnInit(): void {
        setTimeout(() => {
            const gallery = new Natural<T>(this.galleryElement().nativeElement, this.options, this.scrollable);

            gallery.init();

            gallery.addEventListener('select', ev => {
                this.select.emit(ev.detail);
            });

            gallery.addEventListener('activate', ev => {
                this.activate.emit(ev.detail);
            });

            gallery.addEventListener('pagination', ev => {
                this.pagination.emit(ev.detail);
            });

            if (this._items.length) {
                gallery.setItems(this._items);
            }

            this.resolve(gallery);
        });
    }
}
