import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {
  id;
  bookTitle;
  bookDescription;

  constructor(private firebaseService: FirebaseService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getBookDetails(this.id).subscribe(book => {
      this.bookTitle = book.title;
      this.bookDescription = book.description;
    });
  }
  removeBook() {
    this.firebaseService.deleteBook(this.id);
    this.router.navigate(["/"]);
  }
}
