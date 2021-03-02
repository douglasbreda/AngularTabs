import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'tab-label-complex',
  templateUrl: './tab-label-complex.component.html',
  styleUrls: ['./tab-label-complex.component.scss']
})
export class TabLabelComplexComponent implements OnInit {

  @ViewChild(TemplateRef) labelContent!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
