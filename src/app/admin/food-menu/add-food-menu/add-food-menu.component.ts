import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FoodMenuService } from '../../service/food-menu.service';
@Component({
  selector: 'app-add-food-menu',
  templateUrl: './add-food-menu.component.html',
  styleUrls: ['./add-food-menu.component.css']
})
export class AddFoodMenuComponent implements OnInit {
  allowEdit:boolean;
  menuId:number;
  menuName:string;
  menuImageUrl:string;
  menuPrice:number;
  itemCategory:string;
  menuDescription: string;

  constructor(private activatedRoute:ActivatedRoute,private foodMenuService:FoodMenuService,private router:Router) { }

  ngOnInit(): void {
  }
  goToGetFoodMenu(){
    this.router.navigate(['admin/foodMenus']);
  }

}
