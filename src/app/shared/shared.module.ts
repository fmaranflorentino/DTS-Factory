import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MATERIAL_COMPONENTS, SHARED_COMPONENTS } from './helpers/';


@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  imports: [
    CommonModule,
    ...MATERIAL_COMPONENTS
  ],
  exports: [
    ...MATERIAL_COMPONENTS,
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
