import { Component } from '@angular/core';
import { ToggleComponent } from '../toggle.component';

@Component({
  selector: 'toggle-button',
  templateUrl: 'toggle.button.component.html'
})

export class ToggleButtonComponent  {

  constructor(public toggle: ToggleComponent) {}

  onClick() {
    this.toggle.setOnState(!this.toggle.on);
  }
}
