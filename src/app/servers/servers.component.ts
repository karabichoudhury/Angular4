import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowsNewServer = false;
	serverCreationStatus='No server is created';
  constructor() { 
  	setTimeout(()=>{
  		this.allowsNewServer=true;
  	},20000)
  }

  ngOnInit() {
  }

  onCreateServer(){
  	this.serverCreationStatus='Server was created';
  }

}
