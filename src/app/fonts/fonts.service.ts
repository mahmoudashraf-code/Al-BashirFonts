import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontsService {

  constructor() { }

  downloadFont(fontName: string): void {
    const fontUrl = `./assets/fonts/${fontName}`;
    const link = document.createElement('a');
    link.href = fontUrl;
    link.download = fontName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
