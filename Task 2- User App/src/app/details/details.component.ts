import { Component, OnInit } from '@angular/core';
import { DatadetailsService} from '../datadetails.service';
import {Observable} from 'rxjs';
import { ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user$: Object; 
  constructor(private data: DatadetailsService, private route: ActivatedRoute) { 
this.route.params.subscribe(params=>this.user$ = params.id) //passing the id here

  }

  ngOnInit() {
    this.data.getDetails(this.user$).subscribe( //this function which is in the services takes id as a parameter
      data=>this.user$ = data 
    )
  }

}
