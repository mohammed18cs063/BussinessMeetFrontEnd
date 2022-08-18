import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddonService } from '../../../services/addon.service';
import { AddonModel } from '../../../model/add-on.model';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-add-ons',
  templateUrl: './add-add-ons.component.html',
  styleUrls: ['./add-add-ons.component.css'],
})
export class AddAddOnsComponent implements OnInit {
  Addsaddon: any;
  users!: AddonModel[];
  submitted = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private addOnService: AddonService,
    private router: Router
  ) {
    this.forms();
  }

  ngOnInit(): void {
    //
  }
  forms() {
    this.Addsaddon = this.formBuilder.group({
      addonName: ['', [Validators.required, Validators.pattern('^[a-zA-Z-]*')]],
      addonimageUrl: ['', [Validators.required]],
      addonPrice: ['', [Validators.required, Validators.pattern('^[0-9.]*')]],
    });
  }
  AddAddOn() {
    console.log(this.Addsaddon.value);
    this.addOnService.AddingAddOn(this.Addsaddon.value).subscribe(
      (_data) => {
        alert('AddOns Added Successfully');
        this.Addsaddon.reset();
        this.router.navigate(['admin/Addon']);
      },
      (_error) => alert('AddOns Name already exits ')
    );
  }

  goToGetAddOns() {
    this.router.navigate(['admin/Addon']);
  }
  get f(): { [key: string]: AbstractControl } {
    return this.Addsaddon.controls;
  }
  keyPressNumbers(event: any) {
    let charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
