import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {NaturalGalleryComponent} from './natural-gallery.component';
import {beforeEach, describe, it} from 'selenium-webdriver/testing';

describe('NaturalGalleryComponent', () => {
    let comp: NaturalGalleryComponent;
    let fixture: ComponentFixture<NaturalGalleryComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NaturalGalleryComponent], // declare the test component
        });

        fixture = TestBed.createComponent(NaturalGalleryComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('Should be false', () => {
        // expect(false).toBe(true);
    });
});
