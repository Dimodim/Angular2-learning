import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
    signUpMode = true;
    constructor() {}

    ngOnInit(): void {}
    onModeSwitch(): void {
        this.signUpMode = !this.signUpMode;
    }
    onSubmit(form: NgForm): void {
        console.log(form.value);
        form.reset();
    }
}
