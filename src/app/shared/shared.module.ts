import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MATERIAL_COMPONENTS, SHARED_COMPONENTS } from './helpers/';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { OnlyLettersDirective } from './directives/only-letters.directive';

@NgModule({
  declarations: [
    OnlyNumbersDirective,
    OnlyLettersDirective,
    ...SHARED_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ...MATERIAL_COMPONENTS
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    OnlyNumbersDirective,
    OnlyLettersDirective,
    ...MATERIAL_COMPONENTS,
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
