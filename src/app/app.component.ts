import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public form: FormGroup;

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      hobbies: new FormArray([]),
      password: new FormControl(''),
      nom: new FormControl(''),
    });

    console.log(this.form.controls);


  }

  addHobby() {
    this.hobbies.controls.push(new FormControl());
  }

  submit(): void {
    console.log(this.form);
  }
}
