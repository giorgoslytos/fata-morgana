import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
  Form,
  AbstractControl
} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, first } from 'rxjs/operators';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  myForm: FormGroup;

  // FireBase
  // Form State
  loading = false;
  success = false;
  // for resize
  breakpoint = 3;

  email = new FormControl('', [Validators.required, Validators.email]);
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
    // tslint:disable-next-line:semicolon
  };

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  constructor(private fb: FormBuilder, private afs: AngularFirestore) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: '',
      date: ['', [Validators.required]],
      time: ['', [Validators.required, this.timeRangeValidator]],
      people: [
        '',
        [Validators.required, Validators.min(1), Validators.max(30)]
      ],
      comment: ''
    });
    // print changes of form
    // this.myForm.valueChanges.subscribe(console.log);
    // making mat-grid responsive

    if (window.innerWidth <= 500) {
      this.breakpoint = 1;
      return;
    }
    if (window.innerWidth <= 800) {
      this.breakpoint = 2;
      return;
    } else {
      this.breakpoint = 3;
      return;
    }
  }
  // making mat-grid responsive
  onResize(event) {
    if (event.target.innerWidth <= 500) {
      this.breakpoint = 1;
      return;
    }
    if (event.target.innerWidth <= 800) {
      this.breakpoint = 2;
      return;
    } else {
      this.breakpoint = 3;
      return;
    }
  }
  // getters
  get tel() {
    return this.myForm.get('tel') as FormControl;
  }
  get emaiL() {
    return this.myForm.get('email') as FormControl;
  }
  get date() {
    return this.myForm.get('date') as FormControl;
  }
  get time() {
    return this.myForm.get('time') as FormControl;
  }
  get people() {
    return this.myForm.get('people') as FormControl;
  }

  timeRangeValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const hour = control.value.substring(0, 2);
    const minute = control.value.substring(3, 5);

    if (hour > 12 && hour <= 23) {
      return null;
    }
    if (+hour === 12 && minute >= 30) {
      return null;
    } else {
      return { invalidTime: true };
    }
  }

  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;

    try {
      await this.afs.collection('reservation').add(formValue);
      this.success = true;
    } catch (err) {
      console.error(err);
    }
    this.loading = false;
  }
}
