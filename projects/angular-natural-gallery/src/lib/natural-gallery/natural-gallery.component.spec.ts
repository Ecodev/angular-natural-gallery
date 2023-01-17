import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NaturalGalleryComponent} from './natural-gallery.component';

describe('NaturalGalleryComponent', () => {
    let fixture: ComponentFixture<NaturalGalleryComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NaturalGalleryComponent], // declare the test component
        });

        fixture = TestBed.createComponent(NaturalGalleryComponent);
    });

    it('should have Photoswipe template', () => {
        const de = fixture.debugElement.query(By.css('.angular-natural-gallery-container'));
        const el = de.nativeElement;
        expect(el).not.toBeNull();
    });
});
