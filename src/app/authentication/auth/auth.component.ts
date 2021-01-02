import { NgForm } from '@angular/forms';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
    @Input() popupClosed = false;

    signUpMode = true;
    constructor() {}
    ngOnDestroy(): void {}

    ngOnInit(): void {}
    onModeSwitch(): void {
        this.signUpMode = !this.signUpMode;
    }

    onSubmit(form: NgForm): void {
        console.log(form.value);
        form.reset();
    }
}
