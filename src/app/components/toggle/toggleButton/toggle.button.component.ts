import { Component } from '@angular/core';
import { ToggleProviderDirective } from '../../../directives/toggleProvider.directive';

@Component({
  selector: 'toggle-button',
  templateUrl: 'toggle.button.component.html'
})

export class ToggleButtonComponent  {

  constructor(public toggleProvider: ToggleProviderDirective) {}

  onClick() {
    this.toggleProvider.toggle.setOnState(!this.toggleProvider.toggle.on);
  }
}
