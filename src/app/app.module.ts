import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { ThemeComponent } from './admin/theme/theme.component';
import { GetThemeComponent } from './admin/theme/get-theme/get-theme.component';
import { EditThemeComponent } from './admin/theme/edit-theme/edit-theme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddOnsComponent } from './admin/add-ons/add-ons.component';
import { AddThemeComponent } from './admin/theme/add-theme/add-theme.component';
import { DeleteThemeComponent } from './admin/theme/delete-theme/delete-theme.component';
import { AddAddOnsComponent } from './admin/add-ons/add-add-ons/add-add-ons.component';
import { DeleteAddOnsComponent } from './admin/add-ons/delete-add-ons/delete-add-ons.component';
import { EditAddOnsComponent } from './admin/add-ons/edit-add-ons/edit-add-ons.component';
import { GetAddOnsComponent } from './admin/add-ons/get-add-ons/get-add-ons.component';
import { FoodMenuComponent } from './admin/food-menu/food-menu.component';
import { GetFoodMenuComponent } from './admin/food-menu/get-food-menu/get-food-menu.component';
import { AddFoodMenuComponent } from './admin/food-menu/add-food-menu/add-food-menu.component';
import { EditFoodMenuComponent } from './admin/food-menu/edit-food-menu/edit-food-menu.component';
import { DeleteFoodMenuComponent } from './admin/food-menu/delete-food-menu/delete-food-menu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookEventComponent } from './user/book-event/book-event.component';
import { ViewBookedEventComponent } from './user/view-booked-event/view-booked-event.component';
import { DeleteViewBookedEventComponent } from './user/view-booked-event/delete-view-booked-event/delete-view-booked-event.component';
import { EditViewBookedEventComponent } from './user/view-booked-event/edit-view-booked-event/edit-view-booked-event.component';
import { GetViewBookedEventComponent } from './user/view-booked-event/get-view-booked-event/get-view-booked-event.component';
import { UserThemeComponent } from './user/user-theme/user-theme.component';
import { UserThemeService } from './user/user-theme/services/user-theme-service';
import { UserThemeModel } from './user/user-theme/model/user-theme-model';
import { InvoiceComponent } from './user/invoice/invoice.component';
import { FeedbackComponent } from './user/feedback/feedback.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    ThemeComponent,
    GetThemeComponent,
    EditThemeComponent,
    AddOnsComponent,
    AddThemeComponent,
    DeleteThemeComponent,
    AddAddOnsComponent,
    DeleteAddOnsComponent,
    EditAddOnsComponent,
    GetAddOnsComponent,
    FoodMenuComponent,
    GetFoodMenuComponent,
    AddFoodMenuComponent,
    EditFoodMenuComponent,
    DeleteFoodMenuComponent,
    LoginComponent,
    SignupComponent,
    BookEventComponent,
    ViewBookedEventComponent,
    DeleteViewBookedEventComponent,
    EditViewBookedEventComponent,
    GetViewBookedEventComponent,
    UserThemeComponent,
    InvoiceComponent,
    FeedbackComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
