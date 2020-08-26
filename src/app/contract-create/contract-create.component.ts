import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  current = 0;
  prev = -1;

  onPrev() {
    this.prev = this.current--;
  }

  onNext() {
    this.prev = this.current++ ;
  }

  isLeftTransition(idx: number): boolean {
    return this.current === idx ? this.prev > this.current : this.prev < this.current;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
