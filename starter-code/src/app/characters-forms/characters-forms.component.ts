import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-characters-forms',
  templateUrl: './characters-forms.component.html',
  styleUrls: ['./characters-forms.component.css']
})
export class CharactersFormsComponent implements OnInit {
  nameAdd: string = "";
  occAdd: string = "";
  weaponAdd: string = "";
  deptAdd: boolean = false;

  idToEdit: number;
  nameEdit: string = "";
  occEdit: string = "";
  weaponEdit: string = "";
  deptEdit: boolean = false;

  characterToCreateOrEdit = {};

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
  }

  createNew(form){
    if(!this.nameAdd) {return;}

    this.characterToCreateOrEdit = {
      name : this.nameAdd,
      occupation: this.occAdd,
      debt: this.deptAdd,
      weapon: this.weaponAdd
    }
    this.apiService.createNew(this.characterToCreateOrEdit)
      .then(newChar => {});
  }

  editOne(form){
    if(!this.idToEdit || !this.nameEdit) {return;}

    this.characterToCreateOrEdit = {
      name : this.nameEdit,
      occupation: this.occEdit,
      debt: this.deptEdit,
      weapon: this.weaponEdit
    }
    console.log(this.characterToCreateOrEdit);
    this.apiService.editOne(this.idToEdit, this.characterToCreateOrEdit)
     .then(edittedChar => {});
  }

}
