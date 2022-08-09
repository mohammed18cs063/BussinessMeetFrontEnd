import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-theme',
  templateUrl: './delete-theme.component.html',
  styleUrls: ['./delete-theme.component.css']
})
export class DeleteThemeComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
  }

  deleteTheme(){
    this.goToGetThemes();
    alert("Your item deleted Sucessfully");
  }

  goToGetThemes(){
    this.router.navigate(['admin/theme']);
  }

}
