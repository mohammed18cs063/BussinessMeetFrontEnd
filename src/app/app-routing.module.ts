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
import { AuthGuard } from './security/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { BookEventComponent } from './user/book-event/book-event.component';
import { InvoiceComponent } from './user/invoice/invoice.component';
import { UserThemeComponent } from './user/user-theme/user-theme.component';
import { UserComponent } from './user/user.component';
import { DeleteViewBookedEventComponent } from './user/view-booked-event/delete-view-booked-event/delete-view-booked-event.component';
import { EditViewBookedEventComponent } from './user/view-booked-event/edit-view-booked-event/edit-view-booked-event.component';
import { GetViewBookedEventComponent } from './user/view-booked-event/get-view-booked-event/get-view-booked-event.component';
import { ViewBookedEventComponent } from './user/view-booked-event/view-booked-event.component';

const routes: Routes = [
  {path:'',redirectTo:'user/user-theme', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin/theme',canActivate : [AuthGuard],component:ThemeComponent},
  {path:'admin/theme/:id',canActivate : [AuthGuard],component:GetThemeComponent},
  {path:'admin/edittheme/:id',canActivate : [AuthGuard],component:EditThemeComponent},
  {path:'admin/addtheme',canActivate : [AuthGuard],component:AddThemeComponent},
  {path:'admin/deletetheme/:id',canActivate : [AuthGuard],component:DeleteThemeComponent},
  {path:'admin/Addon',canActivate : [AuthGuard],component:AddOnsComponent},
  {path:'admin/Addon/:id',canActivate : [AuthGuard],component:GetAddOnsComponent},
  {path:'admin/editAddon/:id',canActivate : [AuthGuard],component:EditAddOnsComponent},
  {path:'admin/addAddon',canActivate : [AuthGuard],component:AddAddOnsComponent},
  {path:'admin/deleteAddon/:id',canActivate : [AuthGuard],component:DeleteAddOnsComponent},
  {path:'admin/FoodMenu',canActivate : [AuthGuard],component:FoodMenuComponent},
  {path:'admin/FoodMenu/:id',canActivate : [AuthGuard],component:GetFoodMenuComponent},
  {path:'admin/editFoodMenu/:id',canActivate : [AuthGuard],component:EditFoodMenuComponent},
  {path:'admin/addFoodMenu',canActivate : [AuthGuard],component:AddFoodMenuComponent},
  {path:'admin/deleteFoodMenu/:id',canActivate : [AuthGuard],component:DeleteFoodMenuComponent},
  {path:'user',canActivate : [AuthGuard],component:UserComponent},
  {path:'user/book-event',canActivate : [AuthGuard],component:BookEventComponent},
  {path:'user/view-booked-event',canActivate : [AuthGuard],component:ViewBookedEventComponent},
  {path:'user/view-booked-event/:id',canActivate : [AuthGuard],component:GetViewBookedEventComponent},
  {path:'user/view-booked-event/edit-view-booked-event/:id',canActivate : [AuthGuard],component:EditViewBookedEventComponent},
  {path:'user/view-booked-event/delete-view-booked-event/:id',canActivate : [AuthGuard],component:DeleteViewBookedEventComponent},
  {path:'user/user-theme',component:UserThemeComponent},
  {path:'user/invoice',canActivate : [AuthGuard],component:InvoiceComponent},
  {path:'**',redirectTo:"/login",pathMatch:'full'}//should be in last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
