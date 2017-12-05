import { Component, ElementRef, Input, NgZone, OnChanges, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
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

    @ViewChild('gallery') galleryElement: ElementRef;
    @ViewChild('pswp') pswpElement: ElementRef;
    @Input() images: any[] = [];

    private gallery;

    constructor(private ngZone: NgZone, private renderer: Renderer2, private elementRef: ElementRef) {
    }

    ngOnInit() {
        const data = {options: {}};
        const images = [
            {
                'thumbnail': 'https://images.unsplash.com/photo-1461529959205-ba7d61debd0b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=400&fit=max&s=0653332e9c1498112a303c583c102f6a',
                'enlarged': 'https://images.unsplash.com/photo-1461529959205-ba7d61debd0b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=a74e25633c9c659c0778b71ca9aa33a0',
                'title': 'Antonio Ron ',
                'categories': [
                    {
                        'id': 4,
                        'title': 'Nature',
                        'photo_count': 41787,
                        'links': {
                            'self': 'https://api.unsplash.com/categories/4',
                            'photos': 'https://api.unsplash.com/categories/4/photos',
                        },
                    },
                ],
                'tWidth': 443.74009508716324,
                'tHeight': 300,
                'eWidth': 2800,
                'eHeight': 1893,
            },
            {
                'thumbnail': 'https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=400&fit=max&s=6c049f444a1102cffa9d6bbc79f33559',
                'enlarged': 'https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=1927bbe981f4f2f68683c6639673436f',
                'title': 'Marc Wieland ',
                'categories': [
                    {
                        'id': 4,
                        'title': 'Nature',
                        'photo_count': 41787,
                        'links': {
                            'self': 'https://api.unsplash.com/categories/4',
                            'photos': 'https://api.unsplash.com/categories/4/photos',
                        },
                    },
                ],
                'tWidth': 449.9390491670053,
                'tHeight': 300,
                'eWidth': 3691,
                'eHeight': 2461,
            },
            {
                'thumbnail': 'https://images.unsplash.com/photo-1461511540000-cadab67b2b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=400&fit=max&s=2aa8a0e35aaaae42a40f7bd8c83754bb',
                'enlarged': 'https://images.unsplash.com/photo-1461511540000-cadab67b2b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=c19919f27cd695d35a19f315024ebb5a',
                'title': 'Marc Wieland ',
                'categories': [
                    {
                        'id': 4,
                        'title': 'Nature',
                        'photo_count': 41787,
                        'links': {
                            'self': 'https://api.unsplash.com/categories/4',
                            'photos': 'https://api.unsplash.com/categories/4/photos',
                        },
                    },
                ],
                'tWidth': 450,
                'tHeight': 300,
                'eWidth': 4581,
                'eHeight': 3054,
            },
            {
                'thumbnail': 'https://images.unsplash.com/photo-1461529959205-ba7d61debd0b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=400&fit=max&s=0653332e9c1498112a303c583c102f6a',
                'enlarged': 'https://images.unsplash.com/photo-1461529959205-ba7d61debd0b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=a74e25633c9c659c0778b71ca9aa33a0',
                'title': 'Antonio Ron ',
                'categories': [
                    {
                        'id': 4,
                        'title': 'Nature',
                        'photo_count': 41787,
                        'links': {
                            'self': 'https://api.unsplash.com/categories/4',
                            'photos': 'https://api.unsplash.com/categories/4/photos',
                        },
                    },
                ],
                'tWidth': 443.74009508716324,
                'tHeight': 300,
                'eWidth': 2800,
                'eHeight': 1893,
            },
            {
                'thumbnail': 'https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=400&fit=max&s=6c049f444a1102cffa9d6bbc79f33559',
                'enlarged': 'https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=1927bbe981f4f2f68683c6639673436f',
                'title': 'Marc Wieland ',
                'categories': [
                    {
                        'id': 4,
                        'title': 'Nature',
                        'photo_count': 41787,
                        'links': {
                            'self': 'https://api.unsplash.com/categories/4',
                            'photos': 'https://api.unsplash.com/categories/4/photos',
                        },
                    },
                ],
                'tWidth': 449.9390491670053,
                'tHeight': 300,
                'eWidth': 3691,
                'eHeight': 2461,
            },
            {
                'thumbnail': 'https://images.unsplash.com/photo-1461511540000-cadab67b2b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=400&fit=max&s=2aa8a0e35aaaae42a40f7bd8c83754bb',
                'enlarged': 'https://images.unsplash.com/photo-1461511540000-cadab67b2b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=c19919f27cd695d35a19f315024ebb5a',
                'title': 'Marc Wieland ',
                'categories': [
                    {
                        'id': 4,
                        'title': 'Nature',
                        'photo_count': 41787,
                        'links': {
                            'self': 'https://api.unsplash.com/categories/4',
                            'photos': 'https://api.unsplash.com/categories/4/photos',
                        },
                    },
                ],
                'tWidth': 450,
                'tHeight': 300,
                'eWidth': 4581,
                'eHeight': 3054,
            },
            {
                'thumbnail': 'https://images.unsplash.com/photo-1461529959205-ba7d61debd0b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=400&fit=max&s=0653332e9c1498112a303c583c102f6a',
                'enlarged': 'https://images.unsplash.com/photo-1461529959205-ba7d61debd0b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=a74e25633c9c659c0778b71ca9aa33a0',
                'title': 'Antonio Ron ',
                'categories': [
                    {
                        'id': 4,
                        'title': 'Nature',
                        'photo_count': 41787,
                        'links': {
                            'self': 'https://api.unsplash.com/categories/4',
                            'photos': 'https://api.unsplash.com/categories/4/photos',
                        },
                    },
                ],
                'tWidth': 443.74009508716324,
                'tHeight': 300,
                'eWidth': 2800,
                'eHeight': 1893,
            },
            {
                'thumbnail': 'https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=400&fit=max&s=6c049f444a1102cffa9d6bbc79f33559',
                'enlarged': 'https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=1927bbe981f4f2f68683c6639673436f',
                'title': 'Marc Wieland ',
                'categories': [
                    {
                        'id': 4,
                        'title': 'Nature',
                        'photo_count': 41787,
                        'links': {
                            'self': 'https://api.unsplash.com/categories/4',
                            'photos': 'https://api.unsplash.com/categories/4/photos',
                        },
                    },
                ],
                'tWidth': 449.9390491670053,
                'tHeight': 300,
                'eWidth': 3691,
                'eHeight': 2461,
            },
            {
                'thumbnail': 'https://images.unsplash.com/photo-1461511540000-cadab67b2b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=400&fit=max&s=2aa8a0e35aaaae42a40f7bd8c83754bb',
                'enlarged': 'https://images.unsplash.com/photo-1461511540000-cadab67b2b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=c19919f27cd695d35a19f315024ebb5a',
                'title': 'Marc Wieland ',
                'categories': [
                    {
                        'id': 4,
                        'title': 'Nature',
                        'photo_count': 41787,
                        'links': {
                            'self': 'https://api.unsplash.com/categories/4',
                            'photos': 'https://api.unsplash.com/categories/4/photos',
                        },
                    },
                ],
                'tWidth': 450,
                'tHeight': 300,
                'eWidth': 4581,
                'eHeight': 3054,
            },
        ];
        this.gallery = new Gallery(this.galleryElement.nativeElement, this.pswpElement.nativeElement, data);
        this.gallery.images = images;
    }

    ngOnChanges() {
        console.log('change');
    }

}
