import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AddonService } from 'src/app/admin/service/addon.service';

@Component({
  selector: 'app-edit-add-ons',
  templateUrl: './edit-add-ons.component.html',
  styleUrls: ['./edit-add-ons.component.css']
})
export class EditAddOnsComponent implements OnInit {

  allowEdit:boolean;
  addOnId:number;
  addOnName:string;
  addOnPrice:number;
  addOnImageUrl:string;

  constructor(private activatedRoute:ActivatedRoute,private addOnService:AddonService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      let addOnId=+params['id'];
      let server=this.addOnService.getAddOn(addOnId);
      this.addOnId=server.addOnId;
      this.addOnName=server.addOnName;
      this.addOnImageUrl=server.addOnImageUrl;
      this.addOnPrice=server.addOnPrice;
    })
  }

  onUpdateAddOn(){
    let addOnInfo:{
      addOnId:number,
      addOnName:string,
      addOnPrice:number,
      addOnImageUrl:string;}={
      addOnId:this.addOnId,
      addOnName:this.addOnName,
      addOnImageUrl:this.addOnImageUrl,
      addOnPrice:this.addOnPrice
    };
    this.activatedRoute.params.subscribe((params:Params)=>{
      let addOnId=+params['id'];      
      this.addOnService.updateAddOn(addOnId,addOnInfo);
      this.router.navigate(['admin/Addon']);
    });
  }

}
