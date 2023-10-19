import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'list';
  public fb = inject(FormBuilder);
  public form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      title: ["", Validators.required]
    })
  }

  public onSubmit(){
    console.log(this.form.value);
    
  }


}
