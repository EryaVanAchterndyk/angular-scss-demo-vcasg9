import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InfoComponent } from './info/info.component';
import { BookListComponent, InfoComponent } from './book-list/book-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, InfoComponent, BookListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
