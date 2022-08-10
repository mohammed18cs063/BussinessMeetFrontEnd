import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { AddonService } from '../../service/addon.service'; 
import { AddonModel } from '../../model/add-on.model';

@Component({
  selector: 'app-add-add-ons',
  templateUrl: './add-add-ons.component.html',
  styleUrls: ['./add-add-ons.component.css']
})
export class AddAddOnsComponent implements OnInit {
  AddonService: any;
  constructor(private activatedRoute:ActivatedRoute ,private router:Router) { }
  forms() {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }
  AddAddOn()
    {
      console.log(this.AddAddOn);
      this.AddonService.AddingAddOn(this.AddAddOn).subscribe((_data: any)=>{
       
        alert("AddOn Added Successfully");
        this.goToGetAddOns();
       
        
    },(_error: any)=>alert("This Add_on Name is already exists"));
      }
      
  goToGetAddOns(){
    this.router.navigate(['admin/addons']);
  }

}
