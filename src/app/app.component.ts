import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private subscribe: Subscription = new Subscription();

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  constructor(private fb: FormBuilder) { }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      hobbies: this.fb.array([]),
      password: [''],
      nom: [''],
      gender: [''],
      city: [''],
      majeur: ['']
    });

    // this.form.valueChanges.subscribe((value) => {
    //   console.log(value);
    // })

    // this.form.statusChanges.subscribe((value) => {
    //   console.log(value);
    // })

    // this.form = new FormGroup({
    //   email: new FormControl(''),
    //   hobbies: new FormArray([]),
    //   password: new FormControl(''),
    //   nom: new FormControl(''),
    // });

    console.log(this.form.controls);


  }

  addHobby() {
    const control = new FormControl();
    this.subscribe = control.valueChanges.subscribe((value) => {
      console.log(value);
    })
    this.hobbies.controls.push(control);
  }

  submit(): void {
    console.log(this.form);
  }
}
