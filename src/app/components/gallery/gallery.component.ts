import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  Photo:String="assets/img/2010.jpeg";
  Photo1:String="assets/img/2020.jpeg";
  Photo2:String="assets/img/image1.jpeg";
  Photo3:String="assets/img/image2.jpeg";
  Photo4:String="assets/img/image3.jpeg";
  Photo5:String="assets/img/image4.jpeg";
  Photo6:String="assets/img/image5.jpeg";
  Photo7:String="assets/img/image6.jpeg";
  Photo8:String="assets/img/image7.jpeg";
  Photo9:String="assets/img/image9.jpeg";
  Photo10:String="assets/img/image10.jpeg";
  Photo11:String="assets/img/image11.jpeg";

}
