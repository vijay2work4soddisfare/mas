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
  	let url=' http://api.textlocal.in/send/?username=<insert_email_id>&hash=<insert_hash_key>&sender=TXTLCL&numbers=91'+number+'&message='+text;
  	console.log(url);  	
  	//this.http.get(url).subscribe((response)=>console.log(response));
  }
}
