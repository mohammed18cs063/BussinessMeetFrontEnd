import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddonModel } from '../model/add-on.model';
import { AddonService } from 'src/app/admin/service/addon.service';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.css']
})
export class AddOnsComponent implements OnInit {

  addOns:AddonModel[];

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private addOnService:AddonService) { }

  ngOnInit(): void {
    this.addOns=this.addOnService.getAddOns();
  }

  updateAddOn(id: number){
    this.router.navigate(['admin/editAddon', id]);
  }
  deleteAddOn(id: number){
    this.router.navigate(['admin/deleteAddon', id]);
  }
  goToAddAddOn(){
    this.router.navigate(['admin/addAddon']);
  }

}
