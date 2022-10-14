import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NaturalGalleryComponent} from './natural-gallery.component';

xdescribe('NaturalGalleryComponent', () => {
    let comp: NaturalGalleryComponent;
    let fixture: ComponentFixture<NaturalGalleryComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NaturalGalleryComponent], // declare the test component
        });

        fixture = TestBed.createComponent(NaturalGalleryComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
    });

});
