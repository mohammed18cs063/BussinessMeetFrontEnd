import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-add-ons',
  templateUrl: './delete-add-ons.component.html',
  styleUrls: ['./delete-add-ons.component.css']
})
export class DeleteAddOnsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
  }

  deleteAddOn(){
    this.goToGetAddOns();
    alert("Your item deleted Sucessfully");
  }

  goToGetAddOns(){
    this.router.navigate(['admin/Addon']);
  }

}
