import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();

  @Input() width: string = "100px";
  @Input() height: string = "100px";
  
  constructor() { }

  ngAfterContentInit()
  {
    let activeTabs = this.tabs.filter((tab) => tab.active);

    if(activeTabs.length === 0)
    {
      this.selectTab(this.tabs.first);
    }
    debugger;
  }

  selectTab(_tab: TabComponent)
  {
    this.tabs.forEach((tab) => 
    {
      tab.active = false;
    });

    _tab.active = true;
    
  }

}
