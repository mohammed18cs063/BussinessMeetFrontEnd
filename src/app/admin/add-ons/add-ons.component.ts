import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddonModel } from '../../model/add-on.model';
import { AddonService } from 'src/app/services/addon.service';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.css'],
})
export class AddOnsComponent implements OnInit {
  addaddon: AddonModel = new AddonModel();
  addons: AddonModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private addOnService: AddonService
  ) {}

  ngOnInit(): void {
    this.getAddons();
  }
  public getAddons() {
    this.addOnService.getAddons().subscribe((data) => {
      this.addons = data;
    });
  }
  deleteAddon(id: number) {
    this.addOnService.deleteAddon(id).subscribe((data) => {
      console.log(data);
      alert('deleted successfully');
      this.getAddons();
    });
  }
  updateAddon(id: number) {
    this.router.navigate(['admin/editAddon', id]);
  }
  goToAddAddOn() {
    this.router.navigate(['admin/addAddon']);
  }
}
