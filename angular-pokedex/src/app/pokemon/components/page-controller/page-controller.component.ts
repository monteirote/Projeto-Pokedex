import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-controller',
  templateUrl: './page-controller.component.html',
  styleUrls: ['./page-controller.component.scss']
})
export class PageControllerComponent {

  @Output() firstPage = new EventEmitter(false);
  @Output() pageForward = new EventEmitter(false);
  @Output() pageBack = new EventEmitter(false);
  @Output() lastPage = new EventEmitter(false);

  onFirstPage() {
    this.firstPage.emit(true);
  }

  onPageForward() {
    this.pageForward.emit(true);
  }

  onPageBack() {
    this.pageBack.emit(true);
  }

  onLastPage() {
    this.lastPage.emit(true);
  }

}
