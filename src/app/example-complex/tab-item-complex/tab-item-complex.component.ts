import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { TabBodyComplexComponent } from '../tab-body-complex/tab-body-complex.component';
import { TabLabelComplexComponent } from '../tab-label-complex/tab-label-complex.component';

@Component({
  selector: 'tab-item-complex',
  templateUrl: './tab-item-complex.component.html',
  styleUrls: ['./tab-item-complex.component.scss']
})
export class TabItemComplexComponent implements OnInit {

  @Input() label: string = '';
  @Input() isActive: boolean = false;
  @ContentChild(TabBodyComplexComponent) bodyComponent!: TabBodyComplexComponent;
  @ContentChild(TabLabelComplexComponent) labelComponent!: TabLabelComplexComponent;


  constructor() { }

  ngOnInit(): void {
  }

}
