import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  id;
  author;
  title;
  dateadded;
  dateread;
  description;
  imageUrl;
  price;
  rate;

  constructor(private firebaseService: FirebaseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getBookDetails(this.id).subscribe(book => {
      this.author = book.author;
      this.title = book.title;
      this.rate = book.rate;
      this.dateadded = book.dateadded;
      this.dateread = book.dateread;
      this.price = book.price;
      this.description = book.description;
      this.imageUrl = book.imageUrl;
      console.log(this.author);
    });
  }
  updateDateAdded(dateAdded) {
    this.dateadded = this.firebaseService.formatDate(dateAdded);
  }
  updateDateRead(dateRead) {
    this.dateread = this.firebaseService.formatDate(dateRead);
  }
  submitEdit() {
    let book = {
      author: this.author,
      title: this.title,
      dateadded: this.dateadded,
      dateread: this.dateread,
      description: this.description,
      imageUrl: this.imageUrl,
      price: this.price,
      rate: this.rate
    }

    this.firebaseService.updateBook(this.id, book);
    this.router.navigate(["/books"]);
  }
}
