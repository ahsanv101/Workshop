import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'ta-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private route: ActivatedRoute) 
  
  {
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
  }

}
