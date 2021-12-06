import { MatDialog } from "@angular/material/dialog";
import { ConfirmData } from "./confirm-dialogue";
import { ModalComponent } from "./modal/modal.component";

export class customDialogues {

    static openDialog(dialog: MatDialog, data: ConfirmData, callback: Function) {
        const Dialog = dialog.open(ModalComponent, {
            data: data
        });
        Dialog.afterClosed().subscribe((result) => {
            console.log(result);
            if (result != 402) {
                callback();
            }
        });
    }
}