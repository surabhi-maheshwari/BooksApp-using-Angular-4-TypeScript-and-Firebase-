import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BooksComponent } from './Components/books/books.component';
import { BookComponent } from './Components/book/book.component';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { EditbookComponent } from './Components/editbook/editbook.component';
import { DeletebookComponent } from './Components/deletebook/deletebook.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { Routes, RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material design module
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatIconModule } from '@angular/material';

//service
import { FirebaseService } from './services/firebase.service';
//Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'addbook', component: AddbookComponent },
  { path: 'editbook/:id', component: EditbookComponent },
  { path: 'deletebook/:id', component: DeletebookComponent }




]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    AddbookComponent,
    EditbookComponent,
    DeletebookComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase,'books-notes-app'),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AngularFireDatabase, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
