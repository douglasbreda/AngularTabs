import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBodyComplexComponent } from './tab-body-complex.component';

describe('TabBodyComplexComponent', () => {
  let component: TabBodyComplexComponent;
  let fixture: ComponentFixture<TabBodyComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabBodyComplexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBodyComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
