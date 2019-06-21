import {MatDialogConfig} from '@angular/material';


export function defaultDialogConfig() {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '400px';

  return dialogConfig;
}
