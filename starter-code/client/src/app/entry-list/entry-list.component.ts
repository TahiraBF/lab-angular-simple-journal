import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../journal-entries.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  journalEntries;

  constructor(private journalEntry : JournalEntriesService) { }

  ngOnInit() {
    this.journalEntry.getList()
    .subscribe((journalEntries)=> {
        this.journalEntries = journalEntries.docs;
        console.log(this.journalEntries);
      })

  }

}
