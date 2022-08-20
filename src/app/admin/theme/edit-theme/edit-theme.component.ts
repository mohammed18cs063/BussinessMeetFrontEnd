import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ThemeModel } from '../../../model/theme.model';

@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.css']
})
export class EditThemeComponent implements OnInit {
  id!: number;
  user: ThemeModel = new ThemeModel();
  edittheme: any;
  submitted = false;

  constructor(private activatedRoute:ActivatedRoute,private themeService:ThemeService,private  router : Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.themeService.getTheme(this.id).subscribe(data => {
      this.user = data;
      this.newforms();
    }, error => console.log(error));
  }

  newforms()
  {
    this.edittheme = this.formBuilder.group({
    themeName:[this.user.themeName,[Validators.required,Validators.pattern("^[a-zA-Z' ']*")]],
    themeImageUrl:[this.user.themeImageUrl,[Validators.required]],
    themeCost:[this.user.themeCost,[Validators.required,Validators.pattern("^[0-9]*")]],
    themeDescription:[this.user.themeDescription,[Validators.required,Validators.pattern("^[a-zA-Z0-9' ']*")]]
      
    })
  }
forms()
{
  this.edittheme = this.formBuilder.group({
    themeName:['',[Validators.required,Validators.pattern("^[a-zA-Z' ']*")]],
    themeImageUrl:['',[Validators.required]],
    themeCost:['',[Validators.required,Validators.pattern("^[0-9]*")]],
    themeDescription:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9' ']*")]]
  })
}

  update(){
    this.themeService.updateTheme(this.id, this.edittheme.value).subscribe( _data =>{
      this.goToUserList();
    },_error=>alert("something went wrong "))
   
  }
  goToUserList(){
    alert("updated successfully");
    this.router.navigate(['admin/themes']);
  }
  get f(): { [key: string]: AbstractControl } {
    return this.edittheme.controls;
  }
  keyPressNumbers(event:any) {
    let charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }}
}
