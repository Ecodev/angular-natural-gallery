import {Component, viewChild} from '@angular/core';
import {NaturalGalleryComponent} from '@ecodev/angular-natural-gallery';
import {LabelVisibility, type ModelAttributes, type NaturalGalleryOptions} from '@ecodev/natural-gallery-js';
import {type Image, images} from './images';

type Model = ModelAttributes & {thumbnailWidth: number; thumbnailHeight: number};

@Component({
    selector: 'app-root',
    imports: [NaturalGalleryComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    private readonly gallery = viewChild.required<NaturalGalleryComponent>('gallery');

    protected items: Model[];
    protected items1: Model[];
    protected items2: Model[];

    protected options: NaturalGalleryOptions = {
        rowHeight: 400,
        lightbox: true,
        selectable: true,
        activable: true,
        labelVisibility: LabelVisibility.ALWAYS,
    };

    private labelHoverActivated = this.options.labelVisibility === LabelVisibility.HOVER;

    public constructor() {
        this.items1 = images.slice(0, images.length / 2).map(this.mapImages);
        this.items2 = images.slice(images.length / 2).map(this.mapImages);
        this.items = this.items1;
    }

    protected addItems(items: Model[]): void {
        this.gallery().gallery.then(gallery => gallery.addItems(items));
    }

    protected toggleLabelHover(): void {
        this.labelHoverActivated = !this.labelHoverActivated;
        this.gallery().gallery.then(gallery => gallery.setLabelHover(this.labelHoverActivated));
    }

    private mapImages(i: Image): Model {
        return {
            thumbnailSrc: i.urls.small,
            thumbnailWidth: (400 * i.width) / i.height,
            thumbnailHeight: 400,
            enlargedSrc: i.urls.regular,
            enlargedWidth: i.width,
            enlargedHeight: i.height,
            title: i.description ? i.description : i.user.name,
        };
    }

    protected log(val1: string, val2: unknown): void {
        console.log(val1, val2);
    }
}
