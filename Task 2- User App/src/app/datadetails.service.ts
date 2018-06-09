import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatadetailsService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getDetails(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id)
  }

}
