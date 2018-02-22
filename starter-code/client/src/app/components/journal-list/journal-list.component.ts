import { Component, OnInit } from '@angular/core';

import { JournalEntriesService } from '../../service/journal-entries.service';
 
@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})

export class JournalListComponent implements OnInit {

  journals: Array<any>;

  constructor(private journalEntriesService: JournalEntriesService) { }

  ngOnInit() {
    this.journalEntriesService.getList()
    .then((journals) => this.journals = journals);
  }

}
