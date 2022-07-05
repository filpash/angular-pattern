import { Component } from '@angular/core';
import { ToggleComponent } from '../toggle.component';

@Component({
  selector: 'toggle-on',
  templateUrl: 'toggle.on.component.html'
})

export class ToggleOnComponent {

  constructor(public toggle: ToggleComponent) {}
}
