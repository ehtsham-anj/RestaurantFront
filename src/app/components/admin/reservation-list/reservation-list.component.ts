import { Component, OnInit, ViewChild } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {Reserve} from '../../../model/reserve';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

declare var $: any;

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reserveList: Array<Reserve>;
  dataSource: MatTableDataSource<Reserve> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'firstname', 'lastname','email','phone','party', 'action'

];
  selectedReserve: Reserve = new Reserve();
  errorMessage: string;
  infoMessage: string;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  users : any;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.findAllReservations();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllReservations(){
    this.adminService.findAllReservations().subscribe(data => {
      this.reserveList = data;
      this.dataSource.data = data;
    });
  }

  editUserRequest(reserve: Reserve) {
    this.selectedReserve = reserve;
    $("#userModal").modal('show');
  }

  editUser(){
    this.adminService.updateReserve(this.selectedReserve).subscribe(data => {
      let itemIndex = this.reserveList.findIndex(item => item.id == this.selectedReserve.id);
      this.reserveList[itemIndex] = this.selectedReserve;
      this.dataSource = new MatTableDataSource(this.reserveList);
      this.infoMessage = "Mission is completed.";
      $("#userModal").modal('hide');
    },err => {
      if(err.status === 409){
        this.errorMessage = "Username should be unique for each user.";
      }else{
        this.errorMessage = "Unexpected error occurred.";
      }
    });
  }

  deleteUserRequest(reserve: Reserve) {
    this.selectedReserve = reserve;
    $("#deleteModal").modal('show');
  }

  deleteReserve(){
    this.adminService.deleteReserve(this.selectedReserve).subscribe(data => {
      let itemIndex = this.reserveList.findIndex(item => item.id == this.selectedReserve.id);
      if(itemIndex !== -1){
        this.reserveList.splice(itemIndex, 1);
      }
      this.dataSource = new MatTableDataSource(this.reserveList);
      this.infoMessage = "Mission is completed.";
      $("#deleteModal").modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  // public removeReserve(email : string){
  //   let response = this.adminService.deleteReserve(email);
  //   response.subscribe(data => this.users = data);
  // }

}
