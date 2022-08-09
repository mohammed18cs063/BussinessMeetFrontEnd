import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AddonModel } from '../../model/add-on.model';
import { AddonService } from 'src/app/admin/service/addon.service';

@Component({
  selector: 'app-get-add-ons',
  templateUrl: './get-add-ons.component.html',
  styleUrls: ['./get-add-ons.component.css']
})
export class GetAddOnsComponent implements OnInit {

  addOn:AddonModel;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private addOnService:AddonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      let addOnId=+params['id'];
      this.addOn=this.addOnService.getAddOn(addOnId);
    });
  }

  updateAddOn(id: number){
    this.router.navigate(['/admin/editAddon', id]);
  }
  deleteAddOn(id: number){
    this.router.navigate(['/admin/deleteAddon', id]);
  }

}
