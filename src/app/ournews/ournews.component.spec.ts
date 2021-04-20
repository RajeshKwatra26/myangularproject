import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurnewsComponent } from './ournews.component';

describe('OurnewsComponent', () => {
  let component: OurnewsComponent;
  let fixture: ComponentFixture<OurnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
