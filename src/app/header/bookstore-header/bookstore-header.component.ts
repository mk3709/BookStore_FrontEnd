import { Component } from '@angular/core';

@Component({
  selector: 'app-bookstore-header',
  templateUrl: './bookstore-header.component.html',
  styleUrls: ['./bookstore-header.component.scss']
})

export class BookstoreHeaderComponent {
  
}
//   books:Books[]=[];
//   searchTerm: string ='';
  

//   get filteredBooks(): Books[] {
//     return this.books.filter(book =>
//       book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//       book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//       book.genre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//       book.publicationYear.toString().includes(this.searchTerm.toLowerCase())
//     );
//   }

// }

// export interface Books{
//   title: string;
//   author: string;
//   genre: string;
//   publicationYear: number;
// }
