
- [DynamicAccordion](#DynamicAccordion)
- [overlay](#overlay)




## Dynamic Accordion 

El componente "Acordcion" está diseñado para mostrar una lista de actividades con elementos expandibles. Utiliza cdk-accordion de Angular para crear una interfaz tipo acordeón que se puede colapsar. Viene primero un menu con los dias, despues en cada dia se despliega el tipo de deporte, y por cada deporte las actividades realizadas ese dia

![DynamicAccordion]
### activities.component.html

~~~

<div class="w-full">
        <h1 class="text-3xl font-bold mb-4"> Actividades</h1>
        <cdk-accordion >
          <cdk-accordion-item #accordionItem="cdkAccordionItem" *ngFor="let item of list" >
            <button class="bg-primary rounded m-1 mr-0 mb-0 p-2 text-white w-full text-left" type="button" (click)="accordionItem.toggle()"> {{item.label}} </button>
            <div class="pl-1 mr-0" [style.display]="accordionItem.expanded ? '' : 'none'" >
              <ul>
                <li *ngFor="let subItem of item.items">
                   <div class="font-bold p-4 rounded bg-secondary-500 m-1 mr-0 mb-0" (click)="toggleDescription(subItem)">
                    {{ subItem.label }}
                  </div>
                  <div class="ml-4 rounded  flex justify-end m-1 p-2" 
                  [ngClass]="{
                    'bg-alta': subSubItem.intensity === 'alta',
                    'bg-moderada': subSubItem.intensity === 'moderada',
                    'bg-suave': subSubItem.intensity === 'suave',
                   }"
                  *ngFor="let subSubItem of subItem.items" [style.display]="expandedSubItem === subItem ? '' : 'none'">
                    {{ subSubItem.label  }} |  {{ subSubItem.description  }}
                  </div>  
                </li>
              </ul>  
            </div>
          </cdk-accordion-item>
        </cdk-accordion>
        
    </div>
~~~


### activities.component.ts
~~~

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
~~~


## Overlay
El componente "Acordcion" está diseñado para mostrar contenido encima de la misma pantalla que tenemos.
![overlay]

### navbar.component.html
```
 <div class="flex items-center">
    <button type="button" class="flex rounded-full" aria-expanded="false" type="button"
    (click)="isOpen = !isOpen" cdkOverlayOrigin #menuOverlay="cdkOverlayOrigin">
        <img class="object-cover w-8 h-8 rounded-full" src="/assets/images/Captura de pantalla 2023-05-04 144455.png"
        alt="user photo" />
    </button>
</div>

<ng-template cdkConnectedOverlay [cdkConnectedOverlayOrigin]="menuOverlay" [cdkConnectedOverlayOpen]="isOpen">
    <div
    class="z-50 my-4 w-60 text-base list-none bg-white rounded divide-y divide-gray-100 shadow"
  >
    <div class="py-3 px-4 flex justify-between">
      <span class="block text-sm text-center text-gray-900">Mi cuenta</span>
      <button (click)="isOpen = !isOpen" class="block text-sm text-gray-900">
        x
      </button>
    </div>
    <div class="py-3 px-4 flex items-center space-x-4">
      <img
        class="w-10 h-10 rounded-full"
        src="/assets/images/Captura de pantalla 2023-05-04 144455.png"
        alt=""
      />
      <div class="space-y-1">
        <div>Francisco Carranza</div>
        <div class="text-sm text-gray-500">francisco@gmail.com</div>
      </div>
    </div>
    <ul class="py-1" >
      <li>
        <a
          href="#"
          class="block py-2 px-4 text-sm text-gray-700 hover:bg-primary hover:text-white"
          >Mi Perfil</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 px-4 text-sm text-gray-700 hover:bg-primary hover:text-white"
          >Actividades</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 px-4 text-sm text-gray-700 hover:bg-primary hover:text-white"
          >Marcas Personales</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 px-4 text-sm text-gray-700 hover:bg-primary hover:text-white"
          >Configuración</a
        >
      </li>
    </ul>
    <ul class="py-1">
      <li>
        <a
          href="#"
          class="block py-2 px-4 text-sm text-gray-700 hover:font-bold hover:text-primary"
          >Cerrar sesión</a
        >
      </li>
    </ul>
  </div>
</ng-template>

```
### navbar.component.ts

```
export class NavbarComponent {
  isOpenModal = false
}
```