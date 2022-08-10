import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeModel } from '../model/theme.model';
import { ThemeService } from 'src/app/admin/service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  addmenu:ThemeModel=new ThemeModel();
  themes:ThemeModel[];

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private themeService:ThemeService) { }

  ngOnInit(): void {this.gettheme();}

  public gettheme()
  {
   this.themeService.getAllThemes().subscribe(data =>
  {
    this.themes=data;
  })
  }

deleteUser(themeid:number){
this.themeService.deleteUser(themeid).subscribe(data=>{
  console.log(data);
  alert("deleted successfully");
  this.gettheme();
})
}
updateUser(themeid: number){
this.router.navigate(['admin/editTheme',themeid])
}
goToAddTheme(){
  this.router.navigate(['admin/addtheme']);
 }
}
