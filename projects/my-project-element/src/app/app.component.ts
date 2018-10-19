import { Component, OnInit, Input } from '@angular/core';
import { 
  MatSnackBar, 
  MatSnackBarConfig,
  MatSnackBarVerticalPosition,
  MatSnackBarHorizontalPosition
} from '@angular/material';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@Component({
  selector: 'my-project-element',
  templateUrl: 'app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  @Input() verticalPosition:MatSnackBarVerticalPosition = 'bottom';
  @Input() horizontalPosition:MatSnackBarHorizontalPosition = 'center';
  @Input() autoHide:number = 5000;
  @Input() setAutoHide:boolean = true;

  constructor(
    private snackBar: MatSnackBar) {
      this.openSnackBar({
        headerBackground: 'blue', 
        msgBody: 'This is a test...',
        buttons: [
          {
            ctaText: "Test link title #1",
            ctaLink: "#"
          },
          {
            ctaText: "Test link title #2",
            ctaLink: "#"
          }
        ]
      });
    
  }

  ngOnInit() {
  }

  openSnackBar(json) {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    config.panelClass = ['white-snackbar'];
    config.data = json;
    this.snackBar.openFromComponent(SnackBarComponent, config);
  }

}
