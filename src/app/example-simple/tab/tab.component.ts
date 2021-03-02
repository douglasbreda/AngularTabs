import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent
{
  @Input() active: boolean = false;
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
