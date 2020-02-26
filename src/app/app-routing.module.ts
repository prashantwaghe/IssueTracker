import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueTrackerComponent } from './issue-tracker/issue-tracker.component';


const routes: Routes = [
  { path: '', component: IssueTrackerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
