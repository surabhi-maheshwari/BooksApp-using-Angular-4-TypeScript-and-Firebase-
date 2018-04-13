import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  books: FirebaseListObservable<any[]>;
  favouriteBooks: Observable<any[]>;
  unreadBooks: Observable<any[]>;
  bookDetails: Observable<any[]>;

   constructor(private db: AngularFireDatabase) { }
  getBooks() {
    this.books = this.db.list('/books') as FirebaseListObservable<any[]>;
    return this.books;
  }
  getFavouriteBooks() {
    this.favouriteBooks = this.db.list('/books').map(books => {
      const topRatedBooks = books.filter(item => item.rate > 4);
      return topRatedBooks;
    });
    return this.favouriteBooks;
  }

  getUnreadBooks() {
    this.unreadBooks = this.db.list('/books').map(books => {
      const ub = books.filter(item => item.dateread == null);
      return ub;
    });
    return this.unreadBooks;
  }
  getBookDetails(id) {
    this.bookDetails = this.db.object('/books/' + id) as Observable<any[]>;
    return this.bookDetails;
  }
  addBook(bookDetails) {
    //remove undefined fields
    var filteredBook = JSON.parse(JSON.stringify(bookDetails));
    console.log('Filtered Book - ', filteredBook);
    return this.books.push(filteredBook);
  }
  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;

  }
  updateBook(id, bookDetails) {
    var filteredBook = JSON.parse(JSON.stringify(bookDetails));
    return this.books.update(id, filteredBook);
  }
  deleteBook(id) {
    return this.books.remove(id);
  }

  
}
