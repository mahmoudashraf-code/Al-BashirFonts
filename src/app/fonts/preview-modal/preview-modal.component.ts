import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FontsService } from '../fonts.service';

@Component({
  selector: 'app-preview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.scss']
})
export class PreviewModalComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() selectedFont: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() fontSelected = new EventEmitter<any>();

  constructor(private fontsService: FontsService) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.visible = false;
    this.visibleChange.emit(false);
    this.selectedFont = undefined;
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard:', text);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  downloadFont(): void {
    if (this.selectedFont) {
      this.fontsService.downloadFont(this.selectedFont.name);
    }
  }
}
