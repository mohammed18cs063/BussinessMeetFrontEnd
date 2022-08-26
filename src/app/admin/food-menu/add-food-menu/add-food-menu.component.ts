import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodMenuService } from '../../../services/food-menu.service';
import { FoodMenuModel } from '../../../model/food-menu.model';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-food-menu',
  templateUrl: './add-food-menu.component.html',
  styleUrls: ['./add-food-menu.component.css'],
})
export class AddFoodMenuComponent implements OnInit {
  Addsfoodmenu: any;
  users!: FoodMenuModel[];
  submitted = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodMenuService: FoodMenuService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.forms();
  }

  ngOnInit(): void {
    //
  }
  forms() {
    this.Addsfoodmenu = this.formBuilder.group({
      menuName: ['', [Validators.required]],                                     //Validators.pattern('^[a-zA-Z-]*')
      menuImageUrl: ['', [Validators.required]],
      itemCategory: ['', [Validators.required]],
      menuPrice: ['', [Validators.required, Validators.pattern('^[0-9.]*')]],
    });
  }
  AddFoodMenu() {
    console.log(this.Addsfoodmenu.value);
    this.foodMenuService.Addingfood(this.Addsfoodmenu.value).subscribe(
      (_data) => {
        alert('Food Added Successfully');
        this.Addsfoodmenu.reset();
        this.router.navigate(['admin/FoodMenu']);
      },
      (_error) => alert('Food name already exits ')
    );
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
  get f(): { [key: string]: AbstractControl } {
    return this.Addsfoodmenu.controls;
  }
}
