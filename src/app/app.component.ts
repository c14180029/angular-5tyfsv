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
    this.output = ""
    let {a,b} = this;
    this.total = parseInt(a) + parseInt(b);
    this.total = Math.pow(a,b);
    if (this.total %2 ==0){
      this.output +="Hasil = Genap: <br>"
        for(let i = b ;i<=this.total;i++){
          for(let j = 0; j<i;j++){
            this.output = this.output + "*"
          }
          this.output = this.output + "<br/>"
        }
    }
    if(this.total %2 !=0){
      this.output +="Hasil = Ganjil: <br>"
      for(let i = 0;i<5;i++){
        for(let j =5-i;j>0;j--){
          this.output += "*"
        }
        for(let k = 0;k<i+1 && k<a && i<a;k++){
          
            
          this.output +="o"
          
        }
        this.output +="<br>"
      }
    }
  }
  ClearVal(){
    this.total = 0
    this.a = 0
    this.b = 0
  }
}
