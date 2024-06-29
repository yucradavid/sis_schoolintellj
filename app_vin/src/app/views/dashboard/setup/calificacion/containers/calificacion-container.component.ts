// import { Calificacion } from '../models/calificacion';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { CalificacionNewComponent } from '../components/form/calificacion-new.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CalificacionEditComponent } from '../components/form/calificacion-edit.component';
// import { ConfirmDialogService } from '../../../../../shared/confirm-dialog/confirm-dialog.service';
// import { CalificacionListComponent } from '../components';
// import { CalificacionService } from '../../../../../providers/services/calificacion.service';
// import {CalificacionComponent} from "../calificacion.component"; // Asegúrate de tener un servicio para calificaciones
//
// @Component({
//     selector: 'app-calificacion-container',
//     standalone: true,
//     imports: [
//         CommonModule,
//         RouterOutlet,
//         CalificacionListComponent,
//         CalificacionNewComponent,
//         CalificacionEditComponent,
//         FormsModule,
//         ReactiveFormsModule,
//     ],
//     template: `
//         <app-calificacion-list
//             class="w-full"
//             [calificaciones]="calificaciones"
//             (newEvent)="eventNew($event)"
//             (editEvent)="eventEdit($event)"
//             (deleteEvent)="eventDelete($event)"
//         ></app-calificacion-list>
//     `,
// })
// export class CalificacionContainerComponent implements OnInit {
//     public error: string = '';
//     public calificaciones: Calificacion[] = [];
//     public calificacion = new CalificacionComponent();
//
//     constructor(
//         private _calificacionService: CalificacionService, // Cambiado a servicio de calificaciones
//         private _confirmDialogService: ConfirmDialogService,
//         private _matDialog: MatDialog,
//     ) {}
//
//     ngOnInit() {
//         this.getCalificaciones();
//     }
//
//     getCalificaciones(): void {
//         this._calificacionService.getAll$().subscribe(
//             (response) => {
//                 console.log(response);
//                 this.calificaciones = response;
//             },
//             (error) => {
//                 this.error = error;
//             }
//         );
//     }
//
//     public eventNew($event: boolean): void {
//         if ($event) {
//             const calificacionForm = this._matDialog.open(CalificacionNewComponent);
//             calificacionForm.componentInstance.title = 'Nueva Calificación';
//             calificacionForm.afterClosed().subscribe((result: any) => {
//                 if (result) {
//                     this.saveCalificacion(result);
//                 }
//             });
//         }
//     }
//
//     saveCalificacion(data: Object): void {
//         this._calificacionService.add$(data).subscribe((response) => {
//             if (response) {
//                 this.getCalificaciones();
//             }
//         });
//     }
//
//     eventEdit(calificacion: Calificacion): void {
//         this._calificacionService.getById$(calificacion.id).subscribe((response) => {
//             this.calificacion = response || new class implements Calificacion {
//                 comentarios: string;
//                 cursoId: number;
//                 estudianteId: number;
//                 id: number;
//                 nota: number;
//             }();
//             this.openModalEdit(this.calificacion);
//         });
//     }
//
//     openModalEdit(data: Calificacion) {
//         if (data) {
//             const calificacionForm = this._matDialog.open(CalificacionEditComponent);
//             calificacionForm.componentInstance.title = `Editar Calificación`;
//             calificacionForm.componentInstance.calificacion = data;
//             calificacionForm.afterClosed().subscribe((result: any) => {
//                 if (result) {
//                     this.editCalificacion(data.id, result);
//                 }
//             });
//         }
//     }
//
//     editCalificacion(idCalificacion: number, data: Object) {
//         this._calificacionService.update$(idCalificacion, data).subscribe((response) => {
//             if (response) {
//                 this.getCalificaciones();
//             }
//         });
//     }
//
//     public eventDelete(calificacion: Calificacion) {
//         this._confirmDialogService.confirmDelete(
//             {
//                 // title: 'Confirmación Personalizada',
//                 // message: `¿Quieres proceder con esta acción?`,
//             }
//         ).then(() => {
//             this._calificacionService.delete$(calificacion.id).subscribe(() => {
//                 this.getCalificaciones();
//             });
//         }).catch(() => {
//             // Cancelled
//         });
//     }
// }
