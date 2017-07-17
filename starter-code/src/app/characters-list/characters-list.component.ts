import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: []
})
export class CharactersListComponent implements OnInit {

  characters: Array<any> = [
    {name: "TheName",
    id: "TheID",
    occupation: "TheOccupation",
    debt: "TheDebt",
    weapon: "TheWeapon"
  }
  ];

  constructor( private apiService: ApiService) { }

  ngOnInit() {
  }

  fetchAll () {
    //To access this value, use .then
    this.apiService.getList().then(value => {
        this.characters = value; // This value can only be accessed in the call back
    });
    // this.apiService.getList().subscribe((charArr) => console.log(charArr));
  }

  fetchOne (id) {
    this.apiService.getOne(id).then(value => {
        this.characters = [value];
    });
  }

  deleteOne (id) {
    this.apiService.deleteOne(id);
  }

}
