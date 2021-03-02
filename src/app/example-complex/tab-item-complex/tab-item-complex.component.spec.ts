import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabItemComplexComponent } from './tab-item-complex.component';

describe('TabItemComplexComponent', () => {
  let component: TabItemComplexComponent;
  let fixture: ComponentFixture<TabItemComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabItemComplexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabItemComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
