import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  @Input() label: string;
  @Input() hiddenIconPlus = false;
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public btnClicked(): void {
    this.onClick.emit(null);
  }

}
