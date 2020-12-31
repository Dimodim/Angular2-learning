import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthServiceService {
    constructor(private httpClient: HttpClient) {}

    signUp() {}
}
