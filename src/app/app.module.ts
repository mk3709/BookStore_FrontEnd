import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookstoreHeaderComponent } from './header/bookstore-header/bookstore-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book/book.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { LoginComponent } from './login/login/login.component';
import { RegComponent } from './registration/reg/reg.component';
import { FooterComponent } from './footer/footer.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';

@NgModule({
  declarations: [
    AppComponent,
    BookstoreHeaderComponent,
    BookComponent,
    DisplayBookComponent,
    ViewbookComponent,
    LoginComponent,
    RegComponent,
    FooterComponent,
    OrderplacedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
