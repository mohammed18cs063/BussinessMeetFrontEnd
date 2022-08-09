import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
  selector: 'app-add-add-ons',
  templateUrl: './add-add-ons.component.html',
  styleUrls: ['./add-add-ons.component.css']
})
export class AddAddOnsComponent implements OnInit {
  allowEdit:boolean;
  addOnId:number;
  addOnName:string;
  addOnPrice:number;
  addOnImageUrl:string;


  constructor(private activatedRoute:ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
  }
  goToGetAddOns(){
    this.router.navigate(['admin/addons']);
  }

}
