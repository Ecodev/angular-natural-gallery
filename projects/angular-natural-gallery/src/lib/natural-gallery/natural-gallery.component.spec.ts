import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NaturalGalleryComponent} from './natural-gallery.component';
import {beforeEach, describe, expect, it} from 'vitest';

describe('NaturalGalleryComponent', () => {
    let fixture: ComponentFixture<NaturalGalleryComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(NaturalGalleryComponent);
    });

    it('should have Photoswipe template', () => {
        const de = fixture.debugElement.query(By.css('.angular-natural-gallery-container'));
        const el = de.nativeElement;
        expect(el).not.toBeNull();
    });

    it('should bind the selection mode both ways', async () => {
        fixture.componentRef.setInput('options', {rowHeight: 200, selectionMode: true});
        fixture.detectChanges();
        const gallery = await fixture.componentInstance.gallery;

        fixture.componentInstance.selectionModeActive.set(true);
        TestBed.tick();
        await fixture.componentInstance.gallery;
        expect(gallery.selectionModeActive).toBe(true);

        gallery.setSelectionModeActive(false);
        expect(fixture.componentInstance.selectionModeActive()).toBe(false);
    });

    it('should ignore the selection mode without the selectionMode option', async () => {
        fixture.componentRef.setInput('options', {rowHeight: 200});
        fixture.detectChanges();
        const gallery = await fixture.componentInstance.gallery;

        fixture.componentInstance.selectionModeActive.set(true);
        TestBed.tick();
        await fixture.componentInstance.gallery;
        expect(gallery.selectionModeActive).toBe(false);
    });
});
