import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle-button',
  templateUrl: 'toggle.button.component.html'
})

export class ToggleButtonComponent  {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  onClick() {
    this.on = !this.on;
    this.toggle.emit(this.on);
  }
}
