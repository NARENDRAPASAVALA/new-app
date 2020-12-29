import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   public overlayShown = false;
   scrollPosition = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    // var autocomplete = new google.maps.places.Autocomplete($("#address")[0], {});

    // google.maps.event.addListener(autocomplete, 'place_changed', function() {
    //     var place = autocomplete.getPlace();
    //     console.log(place.address_components);
    // });
  }

  public next() {
    this.router.navigate(['/image'])
  }
}