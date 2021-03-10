import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'bashir-ui-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit {
  @ViewChild("ele") dialog: ElementRef<HTMLDialogElement>;
  @Output("closeDialog") close: EventEmitter<null> = new EventEmitter();
  constructor() { }
  ngAfterViewInit() {
    this.dialog.nativeElement.showModal();
  }
}
