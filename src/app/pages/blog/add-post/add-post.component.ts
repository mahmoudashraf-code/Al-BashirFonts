import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import EditorJS from '@editorjs/editorjs';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements AfterViewInit {
  editor: EditorJS;
  @ViewChild("editor") editorEle: ElementRef<HTMLElement>;
  constructor() { }
  ngAfterViewInit(): void {
    this.editor = new EditorJS({
      holder: this.editorEle.nativeElement
    })
  }
}
