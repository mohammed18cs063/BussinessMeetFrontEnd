import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddOnsComponent } from './admin/add-ons/add-add-ons/add-add-ons.component';
import { AddOnsComponent } from './admin/add-ons/add-ons.component';
import { DeleteAddOnsComponent } from './admin/add-ons/delete-add-ons/delete-add-ons.component';
import { EditAddOnsComponent } from './admin/add-ons/edit-add-ons/edit-add-ons.component';
import { GetAddOnsComponent } from './admin/add-ons/get-add-ons/get-add-ons.component';
import { AdminComponent } from './admin/admin.component';
import { AddFoodMenuComponent } from './admin/food-menu/add-food-menu/add-food-menu.component';
import { DeleteFoodMenuComponent } from './admin/food-menu/delete-food-menu/delete-food-menu.component';
import { EditFoodMenuComponent } from './admin/food-menu/edit-food-menu/edit-food-menu.component';
import { FoodMenuComponent } from './admin/food-menu/food-menu.component';
import { GetFoodMenuComponent } from './admin/food-menu/get-food-menu/get-food-menu.component';
import { AddThemeComponent } from './admin/theme/add-theme/add-theme.component';
import { DeleteThemeComponent } from './admin/theme/delete-theme/delete-theme.component';
import { EditThemeComponent } from './admin/theme/edit-theme/edit-theme.component';
import { GetThemeComponent } from './admin/theme/get-theme/get-theme.component';
import { ThemeComponent } from './admin/theme/theme.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookEventComponent } from './user/book-event/book-event.component';
import { InvoiceComponent } from './user/invoice/invoice.component';
import { UserThemeComponent } from './user/user-theme/user-theme.component';
import { UserComponent } from './user/user.component';
import { DeleteViewBookedEventComponent } from './user/view-booked-event/delete-view-booked-event/delete-view-booked-event.component';
import { EditViewBookedEventComponent } from './user/view-booked-event/edit-view-booked-event/edit-view-booked-event.component';
import { GetViewBookedEventComponent } from './user/view-booked-event/get-view-booked-event/get-view-booked-event.component';
import { ViewBookedEventComponent } from './user/view-booked-event/view-booked-event.component';
import { FeedbackComponent } from './user/feedback/feedback.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'admin/themes',component:ThemeComponent},
  {path:'admin/theme/:id',component:GetThemeComponent},
  {path:'admin/editTheme/:id',component:EditThemeComponent},
  {path:'admin/addTheme',component:AddThemeComponent},
  {path:'admin/deleteTheme/:id',component:DeleteThemeComponent},
  {path:'admin/addons',component:AddOnsComponent},
  {path:'admin/addon/:id',component:GetAddOnsComponent},
  {path:'admin/editAddon/:id',component:EditAddOnsComponent},
  {path:'admin/addAddon',component:AddAddOnsComponent},
  {path:'admin/deleteAddon/:id',component:DeleteAddOnsComponent},
  {path:'admin/foodMenus',component:FoodMenuComponent},
  {path:'admin/foodMenu/:id',component:GetFoodMenuComponent},
  {path:'admin/editFoodMenu/:id',component:EditFoodMenuComponent},
  {path:'admin/addFoodMenu',component:AddFoodMenuComponent},
  {path:'admin/deleteFoodMenu/:id',component:DeleteFoodMenuComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'user',component:UserComponent},
  {path:'user/book-event',component:BookEventComponent},
  {path:'user/view-booked-event',component:ViewBookedEventComponent},
  {path:'user/view-booked-event/:id',component:GetViewBookedEventComponent},
  {path:'user/view-booked-event/edit-view-booked-event/:id',component:EditViewBookedEventComponent},
  {path:'user/view-booked-event/delete-view-booked-event/:id',component:DeleteViewBookedEventComponent},
  {path:'user/user-theme',component:UserThemeComponent},
  {path:'user/invoice',component:InvoiceComponent},
  {path:'user/feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
