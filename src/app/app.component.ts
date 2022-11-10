import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('confirmation', { static: true }) public el!: ElementRef<HTMLInputElement>;
  public form: FormGroup = new FormGroup({
    nom: new FormControl('', [this.validatorPaul, Validators.required], this.validatorAsync),
    email: new FormControl(''),
    password: new FormControl('', this.passwordMatch.bind(this))
  });

  get nom() {
    return this.form.get('nom');
  }

  get password() {
    return this.form.get('password');
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
