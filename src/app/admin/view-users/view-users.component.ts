import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/model/user-model.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users: UserModel[];

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private userService:UserService) { 
    
  }

  ngOnInit(): void {
    this.getUsers();
  }
  
  public getUsers(){
    this.userService.getAllUsers().subscribe(data =>
      {
        this.users=data;
      })
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(data =>{
      console.log(data);
      alert("user deleted");
      this.getUsers();
    })
  }
}
