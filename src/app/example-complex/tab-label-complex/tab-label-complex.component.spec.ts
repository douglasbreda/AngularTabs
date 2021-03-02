import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLabelComplexComponent } from './tab-label-complex.component';

describe('TabLabelComplexComponent', () => {
  let component: TabLabelComplexComponent;
  let fixture: ComponentFixture<TabLabelComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabLabelComplexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLabelComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
