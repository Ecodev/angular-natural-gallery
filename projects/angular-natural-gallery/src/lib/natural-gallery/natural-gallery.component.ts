import {
    Component,
    effect,
    type ElementRef,
    Input,
    input,
    model,
    type OnDestroy,
    type OnInit,
    output,
    viewChild,
} from '@angular/core';
import {
    type CustomEventDetailMap,
    type ModelAttributes,
    Natural,
    type NaturalGalleryOptions,
} from '@ecodev/natural-gallery-js';

/** @dynamic */
@Component({
    selector: 'natural-gallery',
    templateUrl: './natural-gallery.component.html',
})
export class NaturalGalleryComponent<T extends ModelAttributes = ModelAttributes> implements OnInit, OnDestroy {
    public readonly options = input.required<NaturalGalleryOptions>();
    public readonly scrollable = input<HTMLElement | null>();
    public readonly selectionModeActive = model(false);

    public readonly activate = output<CustomEventDetailMap<T>['activate']>();
    // eslint-disable-next-line @angular-eslint/no-output-native
    public readonly select = output<CustomEventDetailMap<T>['select']>();
    public readonly pagination = output<CustomEventDetailMap<T>['pagination']>();
    public readonly itemElementCreated = output<CustomEventDetailMap<T>['item-element-created']>();
    public readonly visibleCollectionChange = output<CustomEventDetailMap<T>['visible-collection-change']>();

    private readonly galleryElement = viewChild.required<ElementRef<HTMLElement>>('gallery');

    public readonly gallery: Promise<Natural<T>>;

    private resolve!: (value: Natural<T>) => void;

    private _items: T[] = [];

    private creationTimeout: ReturnType<typeof setTimeout> | undefined;

    @Input()
    public set items(items: T[]) {
        this._items = items;
        this.gallery.then(gallery => gallery.setItems(items));
    }

    public constructor() {
        this.gallery = new Promise<Natural<T>>(resolve => {
            this.resolve = resolve;
        });

        effect(() => {
            const active = this.selectionModeActive();
            if (!this.options().selectionMode) {
                return;
            }

            this.gallery.then(gallery => {
                if (gallery.selectionModeActive !== active) {
                    gallery.setSelectionModeActive(active);
                }
            });
        });
    }

    public ngOnInit(): void {
        this.creationTimeout = setTimeout(() => {
            const gallery = new Natural<T>(this.galleryElement().nativeElement, this.options(), this.scrollable());

            gallery.addEventListener('select', ev => {
                this.select.emit(ev.detail);
            });

            gallery.addEventListener('activate', ev => {
                this.activate.emit(ev.detail);
            });

            gallery.addEventListener('pagination', ev => {
                this.pagination.emit(ev.detail);
            });

            gallery.addEventListener('item-element-created', ev => {
                this.itemElementCreated.emit(ev.detail);
            });

            gallery.addEventListener('visible-collection-change', ev => {
                this.visibleCollectionChange.emit(ev.detail);
            });

            gallery.addEventListener('selection-mode-change', ev => {
                this.selectionModeActive.set(ev.detail);
            });

            if (this._items.length) {
                gallery.setItems(this._items);
            }

            this.resolve(gallery);
        });
    }

    public ngOnDestroy(): void {
        clearTimeout(this.creationTimeout);
        this.gallery.then(gallery => gallery.destroy());
    }
}
