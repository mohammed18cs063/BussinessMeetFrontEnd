import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodMenuService } from '../../../services/food-menu.service';
import { FoodMenuModel } from '../../../model/food-menu.model';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-food-menu.component.html',
  styleUrls: ['./edit-food-menu.component.css'],
})
export class EditFoodMenuComponent implements OnInit {
  id!: number;
  user: FoodMenuModel = new FoodMenuModel();
  editfoodmenu: any;
  submitted = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodmenuService: FoodMenuService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.foodmenuService.getFoodById(this.id).subscribe(
      (data) => {
        this.user = data;
        this.newforms();
      },
      (error) => console.log(error)
    );
  }
  newforms() {
    this.editfoodmenu = this.formBuilder.group({
      menuName: [this.user.menuName, [Validators.required]],
      itemCategory: [this.user.itemCategory],
      menuImageUrl: [this.user.menuImageUrl, [Validators.required]],
      menuPrice: [
        this.user.menuPrice,
        [Validators.required, Validators.pattern('^[0-9.]*')],
      ],
    });
  }
  forms() {
    this.editfoodmenu = this.formBuilder.group({
      menuName: ['', [Validators.required]],
      menuImageUrl: ['', [Validators.required]],
      itemCategory: [''],
      menuPrice: ['', [Validators.required, Validators.pattern('^[0-9.]*')]],
    });
  }
  update() {
    this.foodmenuService.updateFood(this.id, this.editfoodmenu.value).subscribe(
      (_data) => {
        this.goToFoodList();
      },
      (_error) => alert('something went wrong ')
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.editfoodmenu.controls;
  }
  goToFoodList() {
    alert('updated successfully');
    this.router.navigate(['admin/FoodMenu']);
  }
  keyPressNumbers(event: any) {
    let charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
