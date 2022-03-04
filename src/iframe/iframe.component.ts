import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {NgxChessBoardService} from 'ngx-chess-board';




@Component({
  selector: 'iframe-root',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})

export class IframeComponent {
  title = 'my-app';
  url = './assets/chessgame.html';

  urlSafe: any
  
  constructor(public sanitizer: DomSanitizer) {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}