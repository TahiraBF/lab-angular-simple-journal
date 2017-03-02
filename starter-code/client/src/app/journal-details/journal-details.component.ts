import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../journal-entries.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-journal-details',
  templateUrl: './journal-details.component.html',
  styleUrls: ['./journal-details.component.css']
})
export class JournalDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
