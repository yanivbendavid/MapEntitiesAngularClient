import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() buttonClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.buttonClick.emit();
    return false;
  }
}
