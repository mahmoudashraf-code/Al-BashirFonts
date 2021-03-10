import { Component, OnInit } from '@angular/core';
import firebase from "firebase";
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: post[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    firebase.app("auth").storage().ref().child("posts.json").getDownloadURL().then(res => {
      this.http.get<post[]>(res).subscribe(res => {
        this.posts = res;
        console.log(res)
      },
        err => {
          console.log(err)
        })
    })
  }
}
export interface post {
  auther: string,
  img: string,
  title: string,
  id: string
}