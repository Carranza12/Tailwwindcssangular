import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-actividad-dialog',
  templateUrl: './actividad-dialog.component.html',
  styleUrls: ['./actividad-dialog.component.scss']
})
export class ActividadDialogComponent {

  constructor(private _dialogRef: DialogRef) {}

  public close():void {
    console.log('close')
    this._dialogRef.close()
  }
}
