import { Routes } from '@angular/router';
import { Inicio } from './vistas/inicio/inicio';
import { Multas } from './vistas/multas/multas';
import { Pago } from './vistas/pago/pago';
import { Quejas } from './vistas/quejas/quejas';
import { Menu } from './vistas/menu/menu';


export const routes: Routes = [
  {
    path: '',
    component: Menu, // Menu como layout principal
    children: [
      { path: '', component: Inicio },         // ruta por defecto
      { path: 'inicio', component: Inicio },
      { path: 'multas', component: Multas },
      { path: 'pago', component: Pago },
      { path: 'quejas', component: Quejas }
    ]
  },
  { path: '**', redirectTo: '' } // redirige rutas no válidas a inicio
];
