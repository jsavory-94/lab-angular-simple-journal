import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JournalEntriesService} from './service/journal-entries.service';
import { JournalListComponent } from './components/journal-list/journal-list.component';

const routes: Routes = [
  {path: '', component: JournalListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    JournalListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
