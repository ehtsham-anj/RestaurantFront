import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefpage',
  templateUrl: './chefpage.component.html',
  styleUrls: ['./chefpage.component.css']
})
export class ChefpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breakfast:string="assets/images/banner-breakfast.jpg";
  lunch:string="assets/images/banner-lunch.jpg";
  dinner:string="assets/images/banner-dinner.jpg";
  chefather:string="assets/images/chefather.png";

}
