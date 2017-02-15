import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

import { NewComponent } from './new/new.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      UsersComponent,
      NewComponent
  ],
  exports:[
    UsersComponent,
      NewComponent
  ],
})
export class UsersModule { }
