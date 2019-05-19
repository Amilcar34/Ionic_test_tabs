import { Component } from '@angular/core';
import { RandomUserApi } from '../Services/rest.userRandom';
import { User , RandomUserResponse } from '../Model/RandomUserResponse';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private randomUser: RandomUserApi;
  private user : User;

  constructor(randomUser : RandomUserApi){
    this.randomUser = randomUser;
  }

  ngOnInit(){
    this.randomUser.getUser().subscribe((data : RandomUserResponse) => {
      this.user = data.results[1];
    }, (err) => alert(err) )
  }
}
