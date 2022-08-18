import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddonService } from 'src/app/admin/service/addon.service';
import { AddonModel } from '../../model/add-on.model';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-add-ons',
  templateUrl: './edit-add-ons.component.html',
  styleUrls: ['./edit-add-ons.component.css'],
})
export class EditAddOnsComponent implements OnInit {
  id!: number;
  user: AddonModel = new AddonModel();
  editaddon: any;
  submitted = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private addOnService: AddonService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.addOnService.getAddonById(this.id).subscribe(
      (data) => {
        this.user = data;
        this.newforms();
      },
      (error) => console.log(error)
    );
  }
  newforms() {
    this.editaddon = this.formBuilder.group({
      addonName: [this.user.addonName, [Validators.required]],
      addonimageUrl: [this.user.addonimageUrl, [Validators.required]],
      addonPrice: [
        this.user.addonPrice,
        [Validators.required, Validators.pattern('^[0-9.]*')],
      ],
    });
  }
  forms() {
    this.editaddon = this.formBuilder.group({
      addonName: ['', [Validators.required]],
      addonimageUrl: ['', [Validators.required]],
      addonPrice: ['', [Validators.required, Validators.pattern('^[0-9.]*')]],
    });
  }
  update() {
    this.addOnService.updateAddon(this.id, this.editaddon.value).subscribe(
      (_data) => {
        this.goToUserList();
      },
      (_error) => alert('something went wrong ')
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.editaddon.controls;
  }
  goToUserList() {
    alert('updated successfully');
    this.router.navigate(['admin/Addon']);
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
