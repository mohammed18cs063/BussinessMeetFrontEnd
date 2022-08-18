import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { ThemeModel } from 'src/app/model/theme.model';

@Component({
  selector: 'app-user-theme',
  templateUrl: './user-theme.component.html',
  styleUrls: ['./user-theme.component.css']
})
export class UserThemeComponent implements OnInit {
  Uthemes: ThemeModel[];

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private themeService:ThemeService) { }

  ngOnInit(): void {
    this.getthemes();
  }
  public getthemes()
  {
    this.themeService.getAllThemes().subscribe(data =>
      {
        this.Uthemes=data;
      })
  }
  
  
}
