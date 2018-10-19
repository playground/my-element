import { Component, Inject, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'snack-bar-component',
  templateUrl: 'snack-bar.component.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class SnackBarComponent implements OnInit {
  messageBody:string = '';
  links = [];
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private elementRef: ElementRef) {
    console.log(data)
  }

  ngOnInit() {
    let el = this.elementRef.nativeElement.querySelector('div.smartMessageHeader');
    el.style.background = this.data['headerBackground']
    this.messageBody = this.data['msgBody'];
    this.data['buttons'].forEach((b) => {
      this.links.push({ctaText: b.ctaText, ctaLink: b.ctaLink});
    });
  }
}