import { Component } from '@angular/core';
import { ToggleProviderDirective } from '../../../directives/toggleProvider.directive';

@Component({
  selector: 'toggle-on',
  templateUrl: 'toggle.on.component.html'
})

export class ToggleOnComponent {

  constructor(public toggleProvider: ToggleProviderDirective) {}
}
