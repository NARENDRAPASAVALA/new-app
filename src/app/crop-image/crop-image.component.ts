import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crop-image',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.css']
})
export class CropImageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public retake() {
    this.router.navigate(['/image'])
  }
  public next() {
    this.router.navigate(['/code_generate'])
  }
}
