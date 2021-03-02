import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabComplexComponent } from './tab-complex.component';

describe('TabComplexComponent', () => {
  let component: TabComplexComponent;
  let fixture: ComponentFixture<TabComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabComplexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
