import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ThemeService } from 'src/app/admin/service/theme.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Addtheme } from '../add-theme/addtheme';

@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.css']
})
export class EditThemeComponent implements OnInit {
  themeid!: number;
  user: Addtheme = new Addtheme();
  edittheme: any;

  constructor(private activatedRoute:ActivatedRoute,private themeService:ThemeService,private  router : Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.themeid = this.activatedRoute.snapshot.params['themeid'];

    this.themeService.getUserById(this.themeid).subscribe(data => {
      this.user = data;
      this.newforms();
    }, error => console.log(error));
  }

  newforms()
  {
    this.edittheme = this.formBuilder.group({
    themeName:[this.user.themeName,[Validators.required,Validators.pattern("^[a-zA-Z' ']*")]],
    themeimageUrl:[this.user.themeimageUrl,[Validators.required]],
    photographerDetails:[this.user.photographerDetails,[Validators.required,Validators.pattern("^[a-zA-Z0-9,:;/.&' ']*")]],
    videographerDetails:[this.user.videographerDetails,[Validators.required,Validators.pattern("^[a-zA-Z0-9,;:/.&' ']*")]],
    gift:[this.user.gift,[Validators.required,Validators.pattern("^[a-zA-Z' '0-9]*")]],
    themeCost:[this.user.themeCost,[Validators.required,Validators.pattern("^[0-9]*")]],
    themeDiscription:[this.user.themeDiscription,[Validators.required,Validators.pattern("^[a-zA-Z0-9' ']*")]]
      
    })
  }
forms()
{
  this.edittheme = this.formBuilder.group({
    themeName:['',[Validators.required,Validators.pattern("^[a-zA-Z' ']*")]],
    themeimageUrl:['',[Validators.required]],
    photographerDetails:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9,:;/.&' ']*")]],
    videographerDetails:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9,;:/.&' ']*")]],
    gift:['',[Validators.required,Validators.pattern("^[a-zA-Z' '0-9]*")]],
    themeCost:['',[Validators.required,Validators.pattern("^[0-9]*")]],
    themeDiscription:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9' ']*")]]
  })
}

  update(){
    this.themeService.updateUser(this.themeid, this.edittheme.value).subscribe( data =>{
      this.goToUserList();
    },error=>alert("something went wrong "))
   
  }
  goToUserList(){
    alert("updated successfully");
    this.router.navigate(['/viewtheme']);
  }
}
