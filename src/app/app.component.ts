import { Component } from '@angular/core';
import { AppService } from './app.service';
import firebase from "firebase/app";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public app: AppService) {
    firebase.initializeApp({
      apiKey: "AIzaSyBAv-je_lkLCYi-szNPENrxyCAFHTMRsEU",
      authDomain: "al-bashirauth.firebaseapp.com",
      projectId: "al-bashirauth",
      storageBucket: "al-bashirauth.appspot.com",
      messagingSenderId: "770027214514",
      appId: "1:770027214514:web:2e267132f9160266061bab",
      measurementId: "G-111Q3D9DXN"
    }, "auth");
    firebase.app("auth").auth().onAuthStateChanged(
      user => {
        if (user) {
          this.app.user = {
            id: user.uid,
            email: user.email,
            name: user.displayName || "not found",
            picture: user.photoURL || "assets/img/user.svg",
          }
          firebase.app("auth").database().ref().get().then(res => {
            res.forEach(a => {
              if (a.val().id == user.uid)
                this.app.user.name = a.val().name
            })
          })
        } else {
          this.app.user = undefined;
        }
      }
    )
  }
}
