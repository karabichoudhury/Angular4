import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowsNewServer = true;
	serverCreationStatus='No server is created!';
	serverName='';
	serverCreated=false;
  servers=['TestServer1','TestServer2']
  constructor() { 
  	setTimeout(()=>{
  		this.allowsNewServer=false;
  	},2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
  	this.serverCreationStatus='Server was created.Server name is '+ this.serverName;
  	this.serverCreated=true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:Event){
  	console.log(event);
  	this.serverName = (<HTMLInputElement>event.target).value;
  }

}
