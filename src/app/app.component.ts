import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmData } from './confirm-dialogue';
import { customDialogues } from './custom-dialogues';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  recordsPerpage: number = 10;
  page: number = 1;
  data: ConfirmData = {
    code: 402,
    message: "Not Allowed",
    type: "error"
  }
  collection: any[] = [1, 2, 4, 25, 6, 457, 658, 46, 424, 35, 436, 54, 6754, 642, 5, 265, 765, 765, 74, 6, 53, 435, 43, 6, 75, 8, 7986, 987, 45, 64, 5, 34, 32, 54, 6, 57, 68, 9, 80, 8, 56, 7, 52, 34, 324, 325, 4, 675, 7876, 8, 9, 79, 8, 6, 5, 54, 3]
  constructor(public dialog: MatDialog) { }
  Change(event: any) {
    console.warn(event);
  }
  loadRecords(val: any) {
    console.log(val.target.value);
    this.recordsPerpage = parseInt(val.target.value);
  }

  open() {
    customDialogues.openDialog(this.dialog, this.data, () => {
      console.log("Save Clicked");
    });
  }

}
