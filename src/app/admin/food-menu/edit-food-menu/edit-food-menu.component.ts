import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FoodMenuService } from '../../service/food-menu.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-food-menu.component.html',
  styleUrls: ['./edit-food-menu.component.css']
})
export class EditFoodMenuComponent implements OnInit {

  allowEdit:boolean;
  menuId:number;
  menuName:string;
  menuImageUrl:string;
  menuPrice:number;
  itemCategory:string;
  menuDescription: string;
  
  constructor(private activatedRoute:ActivatedRoute,private foodMenuService:FoodMenuService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      let menuId=+params['id'];
      let server=this.foodMenuService.getFoodMenu(menuId);
      this.menuId=server.menuId;
      this.menuName=server.menuName;
      this.menuImageUrl=server.menuImageUrl;
      this.menuPrice=server.menuPrice;
      this.itemCategory=server.itemCategory;
    })
  }

  onUpdateFoodMenu(){
    let menuInfo:{menuId:number,
      menuName:string,
      menuImageUrl:string,
      menuPrice:number,
      itemCategory:string
      menuDescription:string}={
      menuId:this.menuId,
      menuName:this.menuName,
      menuImageUrl:this.menuImageUrl,
      menuPrice:this.menuPrice,
      itemCategory:this.itemCategory,
      menuDescription:this.menuDescription
    };
    this.activatedRoute.params.subscribe((params:Params)=>{
      let menuId=+params['id'];      
      this.foodMenuService.updateFoodMenu(menuId,menuInfo);
      this.router.navigate(['admin/foodMenus']);
    });
  }
}
