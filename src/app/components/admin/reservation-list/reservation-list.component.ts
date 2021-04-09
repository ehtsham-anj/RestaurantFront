import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../../../user-register.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  users : any;

  constructor(private service : UserRegisterService) { }

  ngOnInit() {
    let response = this.service.getUsers();
    response.subscribe(data => this.users = data);
  }

  public removeUser(email : string){
    let response = this.service.deleteUser(email);
    response.subscribe(data => this.users = data);
  }

}
