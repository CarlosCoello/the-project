import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  message = false

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    event.preventDefault()

    let data = {
      name: "",
      email: "",
      password: ""
    }

    data.name = this.registerForm.get("name").value
    data.email = this.registerForm.get("email").value
    data.password = this.registerForm.get("password").value
    
    console.log(data)

    fetch('http://localhost:4000/user/registerMe', {
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>console.log(data));
  }
}
