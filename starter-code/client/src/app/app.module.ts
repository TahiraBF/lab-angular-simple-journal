import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JournalEntriesService } from './journal-entries.service';
import { RouterConfiguration } from './router.config';


import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { JournalDetailsComponent } from './journal-details/journal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    JournalDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterConfiguration
  ],
  providers: [JournalEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
