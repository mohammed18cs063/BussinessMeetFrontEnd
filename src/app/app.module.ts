import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { ThemeComponent } from './admin/theme/theme.component';
import { EditThemeComponent } from './admin/theme/edit-theme/edit-theme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddOnsComponent } from './admin/add-ons/add-ons.component';
import { AddThemeComponent } from './admin/theme/add-theme/add-theme.component';
import { AddAddOnsComponent } from './admin/add-ons/add-add-ons/add-add-ons.component';
import { EditAddOnsComponent } from './admin/add-ons/edit-add-ons/edit-add-ons.component';
import { FoodMenuComponent } from './admin/food-menu/food-menu.component';
import { AddFoodMenuComponent } from './admin/food-menu/add-food-menu/add-food-menu.component';
import { EditFoodMenuComponent } from './admin/food-menu/edit-food-menu/edit-food-menu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookEventComponent } from './user/book-event/book-event.component';
import { UserThemeComponent } from './user/user-theme/user-theme.component';
import { FeedbackComponent } from './user/feedback/feedback.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './security/httpinterceptor';
import { AddFeedbackComponent } from './user/add-feedback/add-feedback.component';
import { AdminFeedbackComponent } from './admin/admin-feedback/admin-feedback.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { ViewBookedEventComponent } from './user/view-booked-event/view-booked-event.component';
import { EditBookedEventComponent } from './user/view-booked-event/edit-booked-event/edit-booked-event.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    ThemeComponent,
    EditThemeComponent,
    AddOnsComponent,
    AddThemeComponent,
    AddAddOnsComponent,
    EditAddOnsComponent,
    FoodMenuComponent,
    AddFoodMenuComponent,
    EditFoodMenuComponent,
    LoginComponent,
    SignupComponent,
    BookEventComponent,
    UserThemeComponent,
    FeedbackComponent,
    AddFeedbackComponent,
    AdminFeedbackComponent,
    ViewUsersComponent,
    ViewBookedEventComponent,
    EditBookedEventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:  [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
