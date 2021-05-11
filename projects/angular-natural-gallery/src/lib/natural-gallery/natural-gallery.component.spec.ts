import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {NaturalGalleryComponent} from './natural-gallery.component';

describe('NaturalGalleryComponent', () => {
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

    it('should have Photoswipe template', () => {
        const de = fixture.debugElement.query(By.css('.pswp'));
        const el = de.nativeElement;
        expect(el).not.toBeNull();
    });
});
