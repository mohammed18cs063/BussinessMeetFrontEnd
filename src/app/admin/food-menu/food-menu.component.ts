import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodMenuModel } from '../model/food-menu.model';
import { FoodMenuService } from '../service/food-menu.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  FoodMenus:FoodMenuModel[];

  constructor(private router:Router,private foodMenuService:FoodMenuService) { }

  ngOnInit(): void {
    this.FoodMenus=this.foodMenuService.getFoodMenus();
  }

  updateFoodMenu(id:number){
    this.router.navigate(['admin/editFoodMenu',id]);
  }
  deleteFoodMenu(id:number){
    this.router.navigate(['admin/deleteFoodMenu',id]);
  }
  goToAddFoodMenu(){
    this.router.navigate(['admin/addFoodMenu']);
  }
}
