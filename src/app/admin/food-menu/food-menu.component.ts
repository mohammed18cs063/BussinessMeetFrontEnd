import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodMenuModel } from '../../model/food-menu.model';
import { FoodMenuService } from '../../services/food-menu.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css'],
})
export class FoodMenuComponent implements OnInit {
  FoodMenus: FoodMenuModel[];

  constructor(
    private router: Router,
    private foodMenuService: FoodMenuService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers() {
    this.foodMenuService.getFoodList().subscribe((data) => {
      this.FoodMenus = data;
    });
  }
  deleteFood(id: number) {
    this.foodMenuService.deleteFood(id).subscribe((data) => {
      console.log(data);
      alert('deleted successfully');
      this.getUsers();
    });
  }
  updateFood(id: number) {
    this.router.navigate(['admin/editFoodMenu', id]);
  }
  goToAddFoodMenu() {
    this.router.navigate(['admin/addFoodMenu']);
  }
}
