import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from '../irrelevent-implementation-details/switch.component';
import { ToggleButtonComponent } from './toggleButton/toggle.button.component';
import { ToggleOnComponent } from './toggleOn/toggle.on.component';
import { ToggleOffComponent } from './toggleOff/toggle.off.component';
import { ToggleDirective } from '../../directives/toggle.directive';
import { ToggleProviderDirective } from '../../directives/toggleProvider.directive';



@NgModule({
  declarations: [
    SwitchComponent,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    ToggleDirective,
    ToggleProviderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    ToggleDirective,
    ToggleProviderDirective
  ]
})
export class ToggleModule { }
