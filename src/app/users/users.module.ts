import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';

import {NewComponent} from './new/new.component';
import {LoginComponent} from './login/login.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        UsersComponent,
        NewComponent,
        LoginComponent
    ],
    exports: [
        UsersComponent,
        // NewComponent,
        // LoginComponent

    ],
})
export class UsersModule {
}
