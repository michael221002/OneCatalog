import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private appDataService: AppDataService){
  }
  ngOnInit() {
  }

  returnbasketLength():string{
    return this.appDataService.basket.length.toString();
  }


}
