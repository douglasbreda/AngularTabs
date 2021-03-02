import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'tab-body-complex',
  templateUrl: './tab-body-complex.component.html',
  styleUrls: ['./tab-body-complex.component.scss']
})
export class TabBodyComplexComponent implements OnInit {

  @ViewChild(TemplateRef) bodyContent!: TemplateRef<any>

  constructor() { }

  ngOnInit(): void {
  }

}
