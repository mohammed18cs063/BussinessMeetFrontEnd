import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Addtheme } from './addtheme';
import { ThemeService } from 'src/app/admin/service/theme.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent implements OnInit {
  addmenu:Addtheme=new Addtheme();
  //themes: Addtheme[];
  //formBuilder: any;
  Addstheme: any;

  constructor(private activatedRoute:ActivatedRoute,private themeService:ThemeService,private router:Router,private formBuilder: FormBuilder) {this.forms(); }

  ngOnInit(): void {
  }
  forms()
{
  this.Addstheme = this.formBuilder.group({
    themeName:['',[Validators.required,Validators.pattern("^[a-zA-Z' ']*")]],
    themeimageUrl:['',[Validators.required]],
    photographerDetails:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9,:;/.&' ']*")]],
    videographerDetails:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9,;:/.&' ']*")]],
    gift:['',[Validators.required,Validators.pattern("^[a-zA-Z' '0-9]*")]],
    themeCost:['',[Validators.required,Validators.pattern("^[0-9]*")]],
    themeDiscription:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9' ']*")]]
  })
}
  AddTheme()
  {
    console.log(this.Addstheme.value);
    this.themeService.Addingtheme(this.Addstheme.value).subscribe(data=>{
      alert("Theme Added Successfully")
   
    this.Addstheme.reset();
    this.router.navigate(['admin/themes']);
  },error=>alert("Theme Already exists"));
    }


}
