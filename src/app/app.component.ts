import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  volunteers: any;
  categoryKeys: string[] = [];
  selectedCategory: string = 'All';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchVolunteers().subscribe((data: Category) => {
      this.volunteers = data;
      this.categoryKeys = Object.keys(this.volunteers);
      console.log(this.volunteers, this.categoryKeys);
    });
  }

  get allVolunteers(): Volunteer[] {
    return this.categoryKeys.flatMap(category => this.volunteers[category]);
  }

  // fetchVolunteers(): Observable<Category> {
  //   const url = 'https://z3efpmw3k2.execute-api.ap-southeast-1.amazonaws.com/dev/volunteers';
  //   return this.http.get<Category>(url);
  // }


  fetchVolunteers(): Observable<Category> {
    const url = 'assets/data/data.json';
    return this.http.get<Category>(url);
  }

  getImagePath(imgPath: string) {
    return `https://dl5qao1aeb4q4.cloudfront.net/${imgPath}`
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }


}


interface Volunteer {
  email_address: string;
  complete_name: string;
  image_path: string;
  comittee: string;
  role: string;
}

interface Category {
  [key: string]: Volunteer[];
}