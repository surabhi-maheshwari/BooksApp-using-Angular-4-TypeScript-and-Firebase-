import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  id: any;
  title:any;
  author:any;
  dateadded:any;
  dateread:any;
  price:any;
  rate:any;
  description:any;
  imageUrl:any;
 constructor(private firebaseService: FirebaseService, private router: Router, private route: ActivatedRoute)
  {

  }

  ngOnInit() {
    //id of book
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getBookDetails(this.id).subscribe(book => {
      this.title = book.title;
      this.author = book.author;
      this.dateadded = book.dateadded;
      this.dateread = book.dateread;
      this.price = book.price;
      this.rate = book.rate;
      this.description = book.description;
      this.imageUrl = book.imageUrl;
    });
  }

}
