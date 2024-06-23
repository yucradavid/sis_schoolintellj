import { Routes } from '@angular/router';
import {TeacherContainerComponent} from "./containers/teacher-container.component";
import {TeacherComponent} from "./teacher.component";

export default [

  {
    path     : '',
    component: TeacherComponent,
    children: [
      {
        path: '',
        component: TeacherContainerComponent,
        data: {
          title: 'Docente'
        }
      },
    ],
  },
] as Routes;
