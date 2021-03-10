import { Component, Input } from '@angular/core';

@Component({
  selector: 'bashir-ui-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input("data") data: IMenuItem[];
  @Input("theme") theme: string;
  index: number = 0;
  constructor() { }
  clickItem(i: number) {
    this.data[i].command();
    this.index = i;
  }
}
export interface IMenuItem {
  name: string,
  command: () => void
}