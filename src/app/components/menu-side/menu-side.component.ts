import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss']
})
export class MenuSideComponent {
  public path: string = '';
  constructor(public _activated_route:ActivatedRoute){
    const { path } = this._activated_route.snapshot.url[0];
    this.path = path;
  }

}
