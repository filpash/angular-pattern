import { Component, Input } from '@angular/core';

@Component({
  selector: 'toggle-off',
  templateUrl: 'toggle.off.component.html'
})

export class ToggleOffComponent {
  @Input() on: boolean;
}
