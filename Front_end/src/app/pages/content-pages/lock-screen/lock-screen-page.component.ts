import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { StorageService } from 'app/shared/auth/storage.service';

@Component({
    selector: 'app-lock-screen-page',
    templateUrl: './lock-screen-page.component.html',
    styleUrls: ['./lock-screen-page.component.scss']
})

export class LockScreenPageComponent {
    @ViewChild('f') lockScreenForm: NgForm;
   
    onSubmit() {
        this.lockScreenForm.reset();
    }
}
