import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreHeaderComponent } from './header/bookstore-header/bookstore-header.component';
import { BookComponent } from './book/book/book.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { LoginComponent } from './login/login/login.component';
import { RegComponent } from './registration/reg/reg.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';

const routes: Routes = [
  {
    path:'',component:BookstoreHeaderComponent
  },
  {
    path:'book',component:BookComponent
  },
  {
    path:'display',component:DisplayBookComponent
  },
  {
    path:'viewbook',component:ViewbookComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'reg',component:RegComponent
  },
  {
    path:'order',component:OrderplacedComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
