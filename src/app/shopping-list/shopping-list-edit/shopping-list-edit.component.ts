import { IIngredient } from './../../models/ingredient';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<IIngredient>();
  constructor() { }

  ngOnInit() {
  }
  onAdd(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient: IIngredient = {name: ingName, amount: ingAmount}
    this.ingredientAdded.emit(newIngredient)
  }
  OnDelete(){

  }
  OnClear(){

  }

}
