import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Entrenamiento, Semana } from 'src/app/models/entrenamiento.model';
import { Dialog } from '@angular/cdk/dialog';
import { ActividadDialogComponent } from 'src/app/components/actividad-dialog/actividad-dialog.component';
@Component({
  selector: 'app-binnacle',
  templateUrl: './binnacle.component.html',
  styleUrls: ['./binnacle.component.scss']
})
export class BinnacleComponent {

  public semanal: Semana[] = [
    {
      title: 'Lunes',
      entrenamientos: [
        {
          title: 'trote regenerativo',
          description: '40 minutos lentos'
        },
      ]
    },
    {
      title: 'Martes',
      entrenamientos: []
    },
    {
      title: 'Miércoles',
      entrenamientos: [
        {
          title: 'trote regenerativo',
          description: '50 minutos lentos'
        },
      ]
    },
    {
      title: 'Jueves',
      entrenamientos: [
        {
          title: 'sesion de pista',
          description: '25x200 a 35seg'
        },
      ]
    },
    {
      title: 'Viernes',
      entrenamientos: [
        {
          title: 'trote regenerativo',
          description: '45 minutos lentos'
        },
      ]
    },
    {
      title: 'Sábado',
      entrenamientos: []
    },
    {
      title: 'Domingo',
      entrenamientos: []
    }
  ]

  public entrenamientos: Entrenamiento[] = [
    {
      title: 'sesion de pista',
      description: '8x1000m a 3:30'
    },
    {
      title: 'distancia de fin de semana',
      description: '14 km a 4:30/km'
    },
  ];

  constructor(private _dialog: Dialog) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  public openActivityDialog():void {
    this._dialog.open(ActividadDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%'
    });
  }

}
