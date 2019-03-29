import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { LoginComponent } from './login/login.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    TableComponent,
    HeaderComponent,
    RightSideBarComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ShowHidePasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
