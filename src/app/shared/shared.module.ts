import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MATERIAL_COMPONENTS } from './helpers/material-components';
import { HeaderComponent } from './components/header/header.component';
import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [HeaderComponent, BaseComponent],
  imports: [
    CommonModule,
    ...MATERIAL_COMPONENTS
  ],
  exports: [
    ...MATERIAL_COMPONENTS,
    HeaderComponent,
    BaseComponent
  ]
})
export class SharedModule { }
