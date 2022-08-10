import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FoodMenuService } from '../../service/food-menu.service';
import { FoodMenuModel } from '../../model/food-menu.model';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-food-menu.component.html',
  styleUrls: ['./edit-food-menu.component.css']
})
export class EditFoodMenuComponent implements OnInit {
  id!: number;
  user: FoodMenuModel = new FoodMenuModel(); 
  editfoodmenu: any;
  
  constructor(private activatedRoute:ActivatedRoute,private foodMenuService:FoodMenuService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.foodMenuService.getUserById(this.id).subscribe(data => {
      this.user = data;
      this.newforms();
    }, error => console.log(error));
  }
  forms()
  {
    this.editfoodmenu = this.formBuilder.group({
     foodname:[{value:'',disabled:true},[Validators.required]],
      imageurl:['',[Validators.required]],
      category:['',[Validators.required]],
      price:['',[Validators.required,Validators.pattern("^[0-9.]*")]],
    })
  }

newforms()
{
  this.editfoodmenu = this.formBuilder.group({
    menuName:[this.user.menuName,[Validators.required]],
    menuImageUrl:[this.user.menuImageUrl,[Validators.required]],
    itemCategory:[this.user.itemCategory,[Validators.required]],
    menuPrice:[this.user.menuPrice,[Validators.required,Validators.pattern("^[0-9.]*")]],
  })
}
  update(){
    this.foodMenuService.updateUser(this.id, this.editfoodmenu.value).subscribe( data =>{
      this.goToUserList();
    },error=>alert("Something went wrong"))
   
  }
  goToUserList(){
    alert("updated successfully");
    this.router.navigate(['admin/foodMenus']);
  }
}

  // onUpdateFoodMenu(){
  //   let menuInfo:{menuId:number,
  //     menuName:string,
  //     menuImageUrl:string,
  //     menuPrice:number,
  //     itemCategory:string
  //     menuDescription:string}={
  //     menuId:this.menuId,
  //     menuName:this.menuName,
  //     menuImageUrl:this.menuImageUrl,
  //     menuPrice:this.menuPrice,
  //     itemCategory:this.itemCategory,
  //     menuDescription:this.menuDescription
  //   };
  //   this.activatedRoute.params.subscribe((params:Params)=>{
  //     let menuId=+params['id'];      
  //     this.foodMenuService.updateFoodMenu(menuId,menuInfo);
  //     this.router.navigate(['admin/foodMenus']);
  //   });
  // }
//}
