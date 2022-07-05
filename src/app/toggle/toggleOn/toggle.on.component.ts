import { Component, Input } from '@angular/core';

@Component({
  selector: 'toggle-on',
  templateUrl: 'toggle.on.component.html'
})

export class ToggleOnComponent {
  @Input() on: boolean;
}
