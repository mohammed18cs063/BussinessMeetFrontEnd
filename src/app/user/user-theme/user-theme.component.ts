import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserThemeModel } from './model/user-theme-model';
import { UserThemeService } from './services/user-theme-service';
@Component({
  selector: 'app-user-theme',
  templateUrl: './user-theme.component.html',
  styleUrls: ['./user-theme.component.css']
})
export class UserThemeComponent implements OnInit {

  userthemes:UserThemeModel[];

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private themeService:UserThemeService) { }

  ngOnInit(): void {
    this.userthemes=this.themeService.getThemes();
  }

  
  
}
