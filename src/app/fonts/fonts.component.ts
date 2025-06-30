import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { x } from "./font"

@Component({
  selector: 'bashie-apps-gui-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent implements OnInit {
  sortField: string = 'name';
  selectEle: any;
  fonts: any[] = [];
  display: boolean = false;
  loading: boolean = true;
  isScrolled: boolean = false;

  constructor(public app: AppService) { }

  ngOnInit(): void {
    this.app.title.setTitle("Al-Bashir Font Library - Premium Arabic & English Typography Collection");
    this.initializeFonts();
  }

  initializeFonts(): void {
    // Simulate loading for better UX
    setTimeout(() => {
      this.fonts = x.map(font => ({
        ...font,
        displayName: this.formatFontName(font.name)
      }));
      this.loading = false;
    }, 500);
  }

  formatFontName(filename: string): string {
    // Remove file extension and format name
    return filename.replace(/\.(ttf|fon|ttc)$/i, '')
                  .replace(/[_-]/g, ' ')
                  .replace(/([a-z])([A-Z])/g, '$1 $2')
                  .trim();
  }

  getLink(): string {
    return `${location.origin}/assets/bashir-gui-font.css`;
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      // Add visual feedback for better UX
      console.log('Copied to clipboard:', text);
      // You can add a toast notification service here in the future
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }
}
