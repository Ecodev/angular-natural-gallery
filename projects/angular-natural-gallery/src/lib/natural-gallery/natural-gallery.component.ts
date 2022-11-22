import {
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnInit,
    Output,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {CustomEventDetailMap, ModelAttributes, Natural, NaturalGalleryOptions} from '@ecodev/natural-gallery-js';
import {DOCUMENT} from '@angular/common';

/** @dynamic */
@Component({
    selector: 'natural-gallery',
    templateUrl: 'natural-gallery.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./natural-gallery.component.scss'],
})
export class NaturalGalleryComponent<T extends ModelAttributes = ModelAttributes> implements OnInit {
    @Input() public options: NaturalGalleryOptions;
    @Input() public scrollable: HTMLElement | undefined | null;

    @Output() public readonly activate = new EventEmitter<CustomEventDetailMap<T>['activate']>();
    // eslint-disable-next-line @angular-eslint/no-output-native
    @Output() public readonly select = new EventEmitter<CustomEventDetailMap<T>['select']>();
    @Output() public readonly pagination = new EventEmitter<CustomEventDetailMap<T>['pagination']>();

    @ViewChild('gallery', {static: true}) private galleryElement: ElementRef<HTMLElement>;

    public readonly gallery = new Promise<Natural<T>>(resolve => {
        this.resolve = resolve;
    });

    private resolve: (value: Natural<T>) => void;

    private _items: T[];

    @Input() public set items(items: T[]) {
        this._items = items;
        if (this.gallery) {
            this.gallery.then(gallery => gallery.setItems(items));
        }
    }

    public constructor(@Inject(DOCUMENT) private readonly document: Document) {}

    public ngOnInit(): void {
        setTimeout(() => {
            const gallery = new Natural<T>(this.galleryElement.nativeElement, this.options, this.scrollable);

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

            if (this._items && this._items.length) {
                gallery.setItems(this._items);
            }

            this.resolve(gallery);
        });
    }
}
