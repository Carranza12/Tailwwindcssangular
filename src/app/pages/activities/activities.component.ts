import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  public expandedSubItem: any = null;

  public list = [
   {
    label:  'Sábado 29 de julio 2023',
    items: [
      {
        label : 'Carrera',
        items: [
          {
            label: '12km suaves',
            description: '12km a ritmo de 5:00/km',
            intensity: 'suave'
          },
          {
            label: '10x800m',
            description: 'a ritmo de 2:49 a 3:03',
            intensity: 'alta'
          },
          {
            label: '18km distancia',
            description: 'a ritmo de 5:15/km',
            intensity: 'moderada'
          },
        ]
      },
      {
        label : 'Bicicleta interna'
      },
      {
        label : 'Fuerza'
      },
    ]
   } ,
   
   
   
   {
    label:  'Viernes 28 de julio 2023',
    items: [
      {
        label : 'Carrera'
      },
      {
        label : 'Bicicleta interna'
      },
      {
        label : 'Fuerza'
      },
    ]
   } ,
   {
    label:  'Jueves 27 de julio 2023',
    items: [
      {
        label : 'Carrera'
      },
      {
        label : 'Bicicleta interna'
      },
      {
        label : 'Fuerza'
      },
    ]
   } ,
   {
    label:  'Miércoles 26 de julio 2023',
    items: [
      {
        label : 'Carrera'
      },
      {
        label : 'Bicicleta interna'
      },
      {
        label : 'Fuerza'
      },
    ]
   } ,
  ];

  public toggleDescription(subItem: any):void {
    if (this.expandedSubItem === subItem) {
      this.expandedSubItem = null;
    } else {
      this.expandedSubItem = subItem;
    }
  }

}
