import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    @Output() selectedFeature = new EventEmitter<string>();

    onSelect(view: string): void {
        this.selectedFeature.emit(view);
    }
}
