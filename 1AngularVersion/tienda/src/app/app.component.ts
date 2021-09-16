import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda';
  number = 0;

  login_validation(email: string,password: string){
    
    const user = email;
    const pass = password;

    console.log("This is a test: " + this.number)
    this.number = this.number + 1;

    if (user == "") {
      console.log("User is empty");
      alert("User field is empty!");
    }
    else {
      if (pass == "") {
        console.log("Password is empty");
        alert("Password field is empty!");
      }
    }




  }

}
