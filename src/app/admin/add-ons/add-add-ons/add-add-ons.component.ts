import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { AddonService } from '../../service/addon.service'; 
import { AddonModel } from '../../model/add-on.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-add-ons',
  templateUrl: './add-add-ons.component.html',
  styleUrls: ['./add-add-ons.component.css']
})
export class AddAddOnsComponent implements OnInit {
  Addsaddon: any;
  users!:  AddonModel[] ;
  
  constructor(private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder,private addOnService:AddonService ,private router:Router) { }

  ngOnInit(): void {
  }
  forms()
  {
    this.Addsaddon = this.formBuilder.group({
      addOnName:['',[Validators.required,Validators.pattern("^[a-zA-Z-]*")]],
      addOnimageUrl:['',[Validators.required]],
      addOnPrice:['',[Validators.required,Validators.pattern("^[0-9.]*")]],
    })
  }
  AddAddOn()
  {
    console.log(this.Addsaddon.value);
    this.addOnService.AddingAddOn(this.Addsaddon.value).subscribe(data=>{
      alert("Food Added Successfully")
      this.Addsaddon.reset();
      this.router.navigate(['admin/addons']);

    
  },error=>alert("Food name already exits "));
    }
      
  goToGetAddOns(){
    this.router.navigate(['admin/addons']);
  }

}
