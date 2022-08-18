import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeModel } from '../../model/theme.model';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
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

deleteUser(id:number){
this.themeService.deleteUser(id).subscribe(data=>{
  console.log(data);
  alert("deleted successfully");
  this.gettheme();
})
}
updateUser(id: number){
this.router.navigate(['admin/edittheme',id])
}
goToAddTheme(){
  this.router.navigate(['admin/addtheme']);
 }
}
