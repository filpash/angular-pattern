import { Component, Input, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';
import { ToggleButtonComponent } from './toggleButton/toggle.button.component';
import { ToggleOnComponent } from './toggleOn/toggle.on.component';
import { ToggleOffComponent } from './toggleOff/toggle.off.component';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
})

export class ToggleComponent implements AfterContentInit {
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(ToggleButtonComponent) toggleButton: ToggleButtonComponent;
  @ContentChild(ToggleOnComponent) toggleOn: ToggleOnComponent;
  @ContentChild(ToggleOffComponent) toggleOff: ToggleOffComponent;

  ngAfterContentInit() {
    this.toggleButton.toggle.subscribe(on => {
      this.on = on;
      this.toggled.emit(on);
      this.toggleOn.on = on;
      this.toggleOff.on = on;
    });
  }
}
