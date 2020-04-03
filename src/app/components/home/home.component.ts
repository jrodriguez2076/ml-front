import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
    // try {
    //   let token = window.localStorage.getItem("access-token")
    //   if (!token) {
    //     this.router.navigate(["/login"])
    //   }  
    // } catch (error) {
    //   this.router.navigate(["/login"])
    // }
    
  }

  ngOnDestroy(): void {

  }

}
