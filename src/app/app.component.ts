import { Component } from '@angular/core';
import { Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private http:Http){
  }
  send(number,text){
  	let url='http://api.textlocal.in/send/?username=gmanoj.isaac@gmail.com&hash=8f26169bcfb1c0569808d67e2ff2d5f566aa1792&sender=TXTLCL&numbers=91'+number+'&message='+text;
  	console.log(url);  	
  	//this.http.get(url).subscribe((response)=>console.log(response));
  }
}
