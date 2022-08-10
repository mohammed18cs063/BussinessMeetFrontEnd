import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FoodMenuService } from '../../service/food-menu.service';
import { FoodMenuModel } from '../../model/food-menu.model';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-food-menu',
  templateUrl: './add-food-menu.component.html',
  styleUrls: ['./add-food-menu.component.css']
})
export class AddFoodMenuComponent implements OnInit {
  Addsfoodmenu: any;
  users!: FoodMenuModel[] ;

  constructor(private activatedRoute:ActivatedRoute,private foodMenuService:FoodMenuService,private router:Router,private formBuilder: FormBuilder) { this.forms();}

  ngOnInit(): void {
  }
  forms()
  {
    this.Addsfoodmenu = this.formBuilder.group({
      menuName:['',[Validators.required,Validators.pattern("^[a-zA-Z-]*")]],
      menuImageUrl:['',[Validators.required]],
      itemCategory:['',[Validators.required]],
      menuPrice:['',[Validators.required,Validators.pattern("^[0-9.]*")]],
    })
  }
  AddFoodMenu()
  {
    console.log(this.Addsfoodmenu.value);
    this.foodMenuService.Addingtheme(this.Addsfoodmenu.value).subscribe(data=>{
      alert("Food Added Successfully")
      this.Addsfoodmenu.reset();
      this.router.navigate(['admin/foodMenus']);

    
  },error=>alert("Food name already exits "));
    }

}
