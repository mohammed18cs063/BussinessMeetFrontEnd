import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodMenuModel } from '../model/food-menu.model';
import { FoodMenuService } from '../service/food-menu.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  FoodMenus:FoodMenuModel[];

  constructor(private router:Router,private foodMenuService:FoodMenuService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers(){
    this.foodMenuService.getUsersList().subscribe(data =>{
      this.FoodMenus=data;
    })
  }
  deleteUser(id:number){
    this.foodMenuService.deleteUser(id).subscribe(data=>{
      console.log(data);
      alert("deleted successfully");
      this.getUsers();
    })
  }
  updateUser(id: number){
    this.router.navigate(['admin/editFoodMenu',id]);
  }
  // updateFoodMenu(id:number){
  //   this.router.navigate(['admin/editFoodMenu',id]);
  // }
  // deleteFoodMenu(id:number){
  //   this.router.navigate(['admin/deleteFoodMenu',id]);
  // }
   goToAddFoodMenu(){
     this.router.navigate(['admin/addFoodMenu']);
   }
}
