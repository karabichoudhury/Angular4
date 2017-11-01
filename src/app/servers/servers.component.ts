import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowsNewServer = true;
  constructor() { 
  	setTimeout(()=>{
  		this.allowsNewServer=false;
  	},20000)
  }

  ngOnInit() {
  }

}
