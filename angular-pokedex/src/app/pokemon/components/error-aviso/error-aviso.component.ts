import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-aviso',
  templateUrl: './error-aviso.component.html',
  styleUrls: ['./error-aviso.component.scss']
})
export class ErrorAvisoComponent {

  durationInSeconds = 5;

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this.snackBar.open(message);
  }
}
