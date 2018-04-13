import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  title;
  author;
  dateadded;
  dateread;
  price;
  rate;
  description;
  imageUrl;
  isRead: boolean=false;
  constructor(private firebaseService: FirebaseService, private router:Router) { }

  ngOnInit() {
  }
  updateDateAdded(dateAdded) {
    this.dateadded = this.firebaseService.formatDate(dateAdded);
  }
  updateDateRead(dateRead) {
    this.dateread = this.firebaseService.formatDate(dateRead);
    this.isRead = true;
  }
  submitAdd() {
    let book = {
      author: this.author,
      title: this.title,
      price: this.price,
      dateadded: this.dateadded,
      dateread: this.dateread,
      rate: this.rate,
      description: this.description,
      imageUrl: this.imageUrl
    }
    this.firebaseService.addBook(book);
    this.router.navigate(['/books']);
  }


}
