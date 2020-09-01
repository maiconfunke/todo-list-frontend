import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  item: any = {};
  @Input() title: string;
  @Input() labelButtonModal: string;
  @Output() onCreate = new EventEmitter();
  sideNavIsOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  public showSideNav(): void {
    this.sideNavIsOpen = true;
  }

  public closeSideNav(): void {
    this.item = {};
    this.sideNavIsOpen = false;
  }

  public create(): void {
    this.onCreate.emit(this.item);
    this.item = {};
    this.sideNavIsOpen = false;
  }
}
