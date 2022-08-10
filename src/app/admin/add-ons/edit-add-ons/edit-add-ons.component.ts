import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AddonService } from 'src/app/admin/service/addon.service';
import { AddonModel } from '../../model/add-on.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-add-ons',
  templateUrl: './edit-add-ons.component.html',
  styleUrls: ['./edit-add-ons.component.css']
})
export class EditAddOnsComponent implements OnInit {
  editaddon: any;
  addOnid!: number;
  user: AddonModel = new AddonModel();

  constructor(private activatedRoute:ActivatedRoute,private addOnService:AddonService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addOnid = this.activatedRoute.snapshot.params['themeid'];

    this.addOnService.getAddon(this.addOnid).subscribe(data => {
      this.user = data;
      this.newforms();
    }, error => console.log(error));
  }
newforms()
{
  this.editaddon = this.formBuilder.group({
    addOnName:[this.user.addOnName,[Validators.required]],
    addOnImageUrl:[this.user.addOnImageUrl,[Validators.required]],
    addOnPrice:[this.user.addOnPrice,[Validators.required,Validators.pattern("^[0-9.]*")]],
  })
}
forms()
{
  this.editaddon = this.formBuilder.group({
    addOnName:[{value:'',disabled:true},[Validators.required]],
    addOnImageUrl:['',[Validators.required]],
    addOnPrice:['',[Validators.required,Validators.pattern("^[0-9.]*")]],
  })
}
  update(){
    this.addOnService.updateAddon(this.addOnid, this.editaddon.value).subscribe( data =>{
      this.goToUserList();
    },error=>alert("something went wrong "))
   
  }
  goToUserList(){
    alert("updated successfully");
    this.router.navigate(['admin/addons']);
  }
  // onUpdateAddOn(){
  //   let addOnInfo:{
  //     addOnId:number,
  //     addOnName:string,
  //     addOnPrice:number,
  //     addOnImageUrl:string;}={
  //     addOnId:this.addOnId,
  //     addOnName:this.addOnName,
  //     addOnImageUrl:this.addOnImageUrl,
  //     addOnPrice:this.addOnPrice
  //   };
  //   this.activatedRoute.params.subscribe((params:Params)=>{
  //     let addOnId=+params['id'];      
  //     this.addOnService.updateAddOn(addOnId,addOnInfo);
  //     this.router.navigate(['admin/addons']);
  //   });
  // }

}
