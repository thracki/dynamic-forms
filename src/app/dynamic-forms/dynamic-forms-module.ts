import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Credentials } from './credentials/credentials';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Credentials
  ],
  exports: [
    Credentials
  ],
})
export class DynamicFormsModule { }
