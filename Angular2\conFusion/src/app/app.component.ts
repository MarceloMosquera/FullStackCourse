import { Component } from '@angular/core';
import {MdSnackBar, MdDialog} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public snackBar: MdSnackBar, public dialog: MdDialog) {}

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 500,
    });
  }
  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog);
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: '<p> Hi, Im a snack! </p>'
})
export class PizzaPartyComponent {}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: '<p> Hi, Im a dialog! </p>',
})
export class DialogOverviewExampleDialog {}
