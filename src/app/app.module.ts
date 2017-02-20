import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {UsersModule} from "./users/users.module";
import {MaterialModule MdIconRegistry} from "@angular/material";
import 'hammerjs';


import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent,

        // UsersComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        UsersModule,
        MaterialModule
    ],
    providers: [MdIconRegistry, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
