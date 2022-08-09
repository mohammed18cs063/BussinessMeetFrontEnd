import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-food-menu',
  templateUrl: './delete-food-menu.component.html',
  styleUrls: ['./delete-food-menu.component.css']
})
export class DeleteFoodMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  deleteFoodMenu(){
    this.goToGetFoodMenu();
    alert("Your item deleted Sucessfully");
  }

  goToGetFoodMenu(){
    this.router.navigate(['admin/foodMenus']);
  }

}
