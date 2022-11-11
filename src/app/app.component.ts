import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('confirmation', { static: true }) public el!: ElementRef<HTMLInputElement>;
  public form: FormGroup;

  get nom() {
    return this.form.get('nom');
  }

  get password() {
    return this.form.get('login').get('password');
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormGroup({
        email: new FormControl(''),
        password: new FormControl('', this.passwordMatch.bind(this))
      }),
      nom: new FormControl('', [this.validatorPaul, Validators.required], this.validatorAsync),
    });
  }

  validatorPaul(formControl: AbstractControl): { [s: string]: boolean } | null {
    if (formControl.value == 'paul') {
      return { notPaul: true }
    } else {
      return null;
    }
  }

  passwordMatch(formControl: AbstractControl): { [s: string]: boolean } | null {
    if (formControl.value !== this.el.nativeElement.value) {
      return { notMatching: true }
    } else {
      return null;
    }
  }

  validatorAsync(formControl: AbstractControl): Promise<{ [s: string]: boolean } | null> {
    return new Promise((resolve, rejet) => {
      setTimeout(() => {
        resolve(null);
      }, 50000);
    })
  }

  submit(): void {
    console.log(this.form);
  }
}
