import { Component, OnInit } from '@angular/core';
// import { User } from '../../user';
import { UserRegisterService } from '../../user-register.service';
import {Reserve} from'../../model/reserve';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  // user : User  = new User(" "," "," "," ",0);
  message : any;
  reserve: Reserve = new Reserve();
  errorMessage: string;


  constructor(private service : UserRegisterService, private router: Router) { }

  ngOnInit() {
  }

  //submit button function
  public registerNow(){
    let reponse = this.service.doRegistration(this.reserve);
    reponse.subscribe(data => {
      this.message = data;
    });
  }

}