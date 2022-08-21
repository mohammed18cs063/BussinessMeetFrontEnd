import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddOnsComponent } from './admin/add-ons/add-add-ons/add-add-ons.component';
import { AddOnsComponent } from './admin/add-ons/add-ons.component';
import { EditAddOnsComponent } from './admin/add-ons/edit-add-ons/edit-add-ons.component';
import { AdminComponent } from './admin/admin.component';
import { AddFoodMenuComponent } from './admin/food-menu/add-food-menu/add-food-menu.component';
import { EditFoodMenuComponent } from './admin/food-menu/edit-food-menu/edit-food-menu.component';
import { FoodMenuComponent } from './admin/food-menu/food-menu.component';
import { AddThemeComponent } from './admin/theme/add-theme/add-theme.component';
import { EditThemeComponent } from './admin/theme/edit-theme/edit-theme.component';
import { ThemeComponent } from './admin/theme/theme.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './security/auth.guard';
import { AdminGuard } from './security/admin.guard';
import { SignupComponent } from './signup/signup.component';
import { BookEventComponent } from './user/book-event/book-event.component';
import { UserThemeComponent } from './user/user-theme/user-theme.component';
import { UserComponent } from './user/user.component';
import { UserGuard } from './security/user.guard';
import { AddFeedbackComponent } from './user/add-feedback/add-feedback.component';
import { FeedbackComponent } from './user/feedback/feedback.component';
import { AdminFeedbackComponent } from './admin/admin-feedback/admin-feedback.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { ViewBookedEventComponent } from './user/book-event/view-booked-event/view-booked-event.component';
import { InvoiceComponent } from './user/invoice/invoice.component';
import { BookedEventsComponent } from './admin/booked-events/booked-events.component';


const routes: Routes = [
  {path:'',redirectTo:'user/user-theme', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',canActivate : [AuthGuard,AdminGuard],component:AdminComponent},
  {path:'admin/themes',canActivate : [AuthGuard,AdminGuard],component:ThemeComponent},
  {path:'admin/edittheme/:id',canActivate : [AuthGuard,AdminGuard],component:EditThemeComponent},
  {path:'admin/addtheme',canActivate : [AuthGuard,AdminGuard],component:AddThemeComponent},
  {path:'admin/Addon',canActivate : [AuthGuard,AdminGuard],component:AddOnsComponent},
  {path:'admin/editAddon/:id',canActivate : [AuthGuard,AdminGuard],component:EditAddOnsComponent},
  {path:'admin/addAddon',canActivate : [AuthGuard,AdminGuard],component:AddAddOnsComponent},
  {path:'admin/FoodMenu',canActivate : [AuthGuard,AdminGuard],component:FoodMenuComponent},
  {path:'admin/editFoodMenu/:id',canActivate : [AuthGuard,AdminGuard],component:EditFoodMenuComponent},
  {path:'admin/addFoodMenu',canActivate : [AuthGuard,AdminGuard],component:AddFoodMenuComponent},
  {path:'user',canActivate : [AuthGuard,UserGuard],component:UserComponent},
  {path:'user/book-event/:id',canActivate : [AuthGuard,UserGuard],component:BookEventComponent},
  {path:'user/view-booked-events',canActivate:[AuthGuard,UserGuard],component:ViewBookedEventComponent},
  {path:'user/user-theme',component:UserThemeComponent},
  {path:'user/add-feedback',canActivate : [AuthGuard,UserGuard],component:AddFeedbackComponent},
  {path:'user/feedback',canActivate : [AuthGuard,UserGuard],component:FeedbackComponent},
  {path:'admin/feedback',canActivate : [AuthGuard,AdminGuard],component:AdminFeedbackComponent},
  {path:'admin/view-users',canActivate : [AuthGuard,AdminGuard],component:ViewUsersComponent},
  {path:'user/invoice/:eventId',canActivate:[AuthGuard,UserGuard],component:InvoiceComponent},
  {path:'admin/view-booked-events', canActivate:[AuthGuard,AdminGuard],component:BookedEventsComponent},
  {path:'**',redirectTo:"/login",pathMatch:'full'}//should be in last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
