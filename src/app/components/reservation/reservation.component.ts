import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserRegisterService } from '../../user-register.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  user : User  = new User(" "," "," "," ",0);
  message : any;

  constructor(private service : UserRegisterService) { }

  ngOnInit() {
  }

  public registerNow(){
    let reponse = this.service.doRegistration(this.user);
    reponse.subscribe(data => {
      this.message = data;
    });
  }

}