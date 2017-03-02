import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../journal-entries.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-journal-details',
  templateUrl: './journal-details.component.html',
  styleUrls: ['./journal-details.component.css']
})
export class JournalDetailsComponent implements OnInit {

  entryId: string;
  jEntry = {};

  constructor(
    private journalEntry : JournalEntriesService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params)=> {
        this.entryId = params['id'];
        this.getEntryById(this.entryId);
      })
  }

  getEntryById(id){
    this.journalEntry.getById(id)
    .subscribe((jEntry)=> {
      this.jEntry = jEntry;
      console.log(jEntry);
    })
  }
}
