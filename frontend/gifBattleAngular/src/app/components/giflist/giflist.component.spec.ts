import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiflistComponent } from './giflist.component';

describe('GiflistComponent', () => {
  let component: GiflistComponent;
  let fixture: ComponentFixture<GiflistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiflistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
