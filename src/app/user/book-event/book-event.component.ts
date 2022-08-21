import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddonModel } from 'src/app/model/add-on.model';
import { BookEvent } from 'src/app/model/book-event.model';
import { FoodMenuModel } from 'src/app/model/food-menu.model';
import { AddonService } from 'src/app/services/addon.service';
import { BookEventService } from 'src/app/services/book-event.service';
import { FoodMenuService } from 'src/app/services/food-menu.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';
import { UserloginService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css'],
})
export class BookEventComponent implements OnInit {
  currentdate: any = new Date();
  bookevent: BookEvent = new BookEvent();
  addonArr: Array<AddonModel> = new Array();
  addon: AddonModel = new AddonModel();
  foodmenu: FoodMenuModel = new FoodMenuModel();
  foodMenuArr: Array<FoodMenuModel> = new Array();
  public form: any;
  themeId: any;
  theme: any;
  totalPrice: number = 0;
  addonPrice: number = 0;
  foodmenuPrice: number = 0;
  user: any;

  constructor(
    private bookeventService: BookEventService,
    private userService: UserService,
    private loginService: UserloginService,
    private route: ActivatedRoute,
    private router: Router,
    private addOnService: AddonService,
    private themeService: ThemeService,
    private menu: FoodMenuService
  ) {
    //
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.themeId = Number(routeParams.get('id'));

    this.themeService.getTheme(this.themeId).subscribe((data) => {
      this.theme = data;

      console.log(data);
      this.bookevent.eventName = this.theme.themeName;
      this.bookevent.theme=this.theme.themeCost;
    });
    this.userService.getUser(this.loginService.User.id).subscribe((data) => {
      this.user = data;
      console.log(data);
      this.bookevent.name = this.user.name;
      this.bookevent.email = this.user.email;
    });
    this.bookevent.userId = this.loginService.User.id;
    this.getAddons();
    this.getMenu();
    //this.UpdateTotalPrice();
  }

  public getAddons() {
    this.addOnService.getAddons().subscribe((data) => {
      this.addonArr = data;
      console.log(data);
    });
  }

  public getMenu() {
    this.menu.getFoodList().subscribe((data) => {
      this.foodMenuArr = data;
      console.log(data);
    });
  }

  // public updateAddonPrice(event) {
  //   this.bookevent.addon = event.target.value;
  //   this.UpdateTotalPrice();
  // }

  // public updateFoodMenuPrice(event) {
  //   this.bookevent.menu = event.target.value;
  //   this.UpdateTotalPrice();
  // }

  // UpdateTotalPrice() {
  //   this.totalPrice = Number(
  //     this.theme.themeCost +
  //       this.bookevent.addon +
  //       this.bookevent.menu * this.bookevent.noOfPeople
  //   );
  // }

  BookEvent() {
    console.log(this.bookevent);
    this.bookeventService.BookingEvent(this.bookevent).subscribe(
      (_data) => {
        alert('Event Booked Successfully');
        this.router.navigate(['user/view-booked-events']);
      },

      (_error) => alert('Something went wrong ')
    );
  }
}
