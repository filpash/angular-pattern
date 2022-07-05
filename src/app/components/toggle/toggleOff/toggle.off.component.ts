import { Component } from '@angular/core';
import { ToggleProviderDirective } from '../../../directives/toggleProvider.directive';

@Component({
  selector: 'toggle-off',
  templateUrl: 'toggle.off.component.html'
})

export class ToggleOffComponent {

  constructor(public toggleProvider: ToggleProviderDirective) {}
}
