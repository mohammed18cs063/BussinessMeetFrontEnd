import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FoodMenuModel } from '../../model/food-menu.model';
import { FoodMenuService } from '../../service/food-menu.service';

@Component({
  selector: 'app-get-menu',
  templateUrl: './get-food-menu.component.html',
  styleUrls: ['./get-food-menu.component.css']
})
export class GetFoodMenuComponent implements OnInit {
  foodMenu:FoodMenuModel;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private foodMenuService:FoodMenuService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      let menuId=+params['id'];
      this.foodMenu=this.foodMenuService.getFoodMenu(menuId);
    });
  }
  updateFoodMenu(id: number){
    this.router.navigate(['admin/editFoodMenu', id]);
  }
  deleteFoodMenu(id: number){
    this.router.navigate(['admin/deleteFoodMenu', id]);
  } 

}
