import { Component, OnInit } from '@angular/core';
import { IssueTrackerService } from '../issue-tracker.service';
import { error } from 'util';

@Component({
  selector: 'app-issue-tracker',
  templateUrl: './issue-tracker.component.html',
  styleUrls: ['./issue-tracker.component.css']
})
export class IssueTrackerComponent implements OnInit {

  issuesArr:[] = [];
  IssueListName: string = 'BizAnalytics';
  edit: boolean = false;
  
  constructor(private trackerService: IssueTrackerService) { }

  ngOnInit() {

    this.trackerService.getIssueStatus().subscribe( 
      res => {
        this.issuesArr = res;
      },
      error => {
        console.log(error);
        if (error.status == 404) {
          alert('Invalid API');
        }
      });
  }

}
