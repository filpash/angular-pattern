import { Component } from '@angular/core';
import { ToggleComponent } from "../toggle.component";

@Component({
  selector: 'toggle-off',
  templateUrl: 'toggle.off.component.html'
})

export class ToggleOffComponent {

  constructor(public toggle: ToggleComponent) {}
}
