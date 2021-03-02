import { AfterContentChecked, AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { TabItemComplexComponent } from '../tab-item-complex/tab-item-complex.component';
import { startWith, map, delay } from "rxjs/operators";

@Component({
  selector: 'tab-complex',
  templateUrl: './tab-complex.component.html',
  styleUrls: ['./tab-complex.component.scss']
})
export class TabComplexComponent implements AfterContentInit, AfterContentChecked
{

  @ContentChildren(TabItemComplexComponent) tabs: QueryList<TabItemComplexComponent> = new QueryList();
  tabItems!: Observable<TabItemComplexComponent[]>;
  activeTab!: TabItemComplexComponent;

  constructor() { }

  ngAfterContentInit(): void
  {
    this.tabItems = this.tabs.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(() => this.tabs.toArray()));
  }

  ngAfterContentChecked(): void
  {
    if (!this.activeTab)
    {
      Promise.resolve().then(() =>
      {
        this.activeTab = this.tabs.first;
      });
    }
  }

  selectTab(tabItem: TabItemComplexComponent)
  {
    if (this.activeTab === tabItem)
    {
      return;
    }

    if (this.activeTab)
    {
      this.activeTab.isActive = false;
    }

    this.activeTab = tabItem;

    tabItem.isActive = true;
  }

}
