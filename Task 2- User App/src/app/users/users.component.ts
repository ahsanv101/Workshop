import { Component, OnInit } from '@angular/core';
import { DatadetailsService} from '../datadetails.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  users$ : Object; //im using this instead of an array
  constructor(private data: DatadetailsService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data //binding data here
    );

  }

}
