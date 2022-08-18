import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ThemeModel } from '../../model/theme.model';
import { ThemeService } from 'src/app/admin/service/theme.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent implements OnInit {
  addmenu: ThemeModel = new ThemeModel();
  Addstheme: any;
  submitted = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private themeService: ThemeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.forms();
  }

  ngOnInit(): void {
    //
  }
  forms() {
    this.Addstheme = this.formBuilder.group({
      themeName: [
        '',
        [Validators.required, Validators.pattern("^[a-zA-Z' ']*")],
      ],
      themeImageUrl: ['', [Validators.required]],
      themeCost: ['', [Validators.required, Validators.pattern('^[0-9]*')]],
      themeDescription: [
        '',
        [Validators.required, Validators.pattern("^[a-zA-Z0-9' ']*")],
      ],
    });
  }
  AddTheme() {
    console.log(this.Addstheme.value);
    this.themeService.Addingtheme(this.Addstheme.value).subscribe(
      (_data) => {
        alert('Theme Added Successfully');

        this.Addstheme.reset();
        this.router.navigate(['admin/themes']);
      },
      (_error) => alert('Theme Already exists')
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.Addstheme.controls;
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
