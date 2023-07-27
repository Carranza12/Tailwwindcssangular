import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() colorBtn: 'danger' | 'primary' | 'success' = 'success';

  get colors() {
    return {
      'bg-success-700': this.colorBtn === 'success',
      'hover:bg-success-800': this.colorBtn === 'success',
      'focus:ring-success-300': this.colorBtn === 'success',
      'bg-primary-700': this.colorBtn === 'primary',
      'hover:bg-primary-800': this.colorBtn === 'primary',
      'focus:ring-primary-300': this.colorBtn === 'primary',
      'bg-danger-700': this.colorBtn === 'danger',
      'hover:bg-danger-800': this.colorBtn === 'danger',
      'focus:ring-danger-300': this.colorBtn === 'danger',
    }
  }
}
