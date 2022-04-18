import {Component, OnInit} from '@angular/core';
import {mPageService} from "@clinicaloffice/clinical-office-mpage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public mPage: mPageService) {
  }

  ngOnInit(): void {
    this.mPage.setMaxInstances(2, true, 'CHART');
  }

}
