import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Andrew Firman';
  item = {
    "nama":"Mainan",
    "harga":50000
  }
  a
  b
  total = 0
  output = ""
  SaveVal(){
    let {a,b} = this;
    this.total = parseInt(a) + parseInt(b);
    this.total = Math.pow(a,b);
    if (this.total %2 ==0){
        for(let i = b ;i<=this.total;i++){
          for(let j = 0; j<i;j++){
            this.output = this.output + "*"
          }
          this.output = this.output + "<br>"
        }
    }
  }
}
