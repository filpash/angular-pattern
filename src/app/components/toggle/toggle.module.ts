import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from '../irrelevent-implementation-details/switch.component';
import { ToggleComponent } from './toggle.component';
import { ToggleButtonComponent } from './toggleButton/toggle.button.component';
import { ToggleOnComponent } from './toggleOn/toggle.on.component';
import { ToggleOffComponent } from './toggleOff/toggle.off.component';



@NgModule({
  declarations: [
    ToggleComponent,
    SwitchComponent,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleComponent,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent
  ]
})
export class ToggleModule { }
