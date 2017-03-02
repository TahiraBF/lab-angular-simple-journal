import {NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { JournalDetailsComponent } from './journal-details/journal-details.component';


const routes: Routes = [
  { path: '', component: EntryListComponent },
  { path: 'api/journal-entries/:id',  component: JournalDetailsComponent }
];


@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class RouterConfiguration {}
