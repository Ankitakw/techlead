import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';
//import { DownloadFileService } from 'src/app/download-file.service';
@Component({
  selector: 'app-user-reports',
  templateUrl: './user-reports.component.html',
  styleUrls: ['./user-reports.component.scss']
})
export class UserReportsComponent implements OnInit {
  userDetails: any;
  id: any;
  userName: any;
  constructor(public _ApiService: ApiServiceService, private route:ActivatedRoute) {
   }

  ngOnInit(): void {

    this.route.params.subscribe((data:any)=>{
      this.id =data.id 
      this._ApiService.getSingleUser(this.id).
      subscribe((data:any) => {
        this.userDetails = data;
        console.log("user",this.userDetails);
    });
  });

  
  }
  delete(){
    this.route.params.subscribe((data:any)=>{
      this.id =data.id
      this._ApiService.deleteUser(this.id).
      subscribe((data)=>{
        data;
      })
    })
  }
  update(){
    this.route.params.subscribe((data:any)=>{
      this.id =data.id
    this._ApiService.updateUser(this.id).
      subscribe((data:any)=>{

      })
  });
}
}