// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDialog } from '@angular/material/dialog';
// import { Calificacion } from '../../models/calificacion';
//
// @Component({
//     selector: 'app-calificacion-list',
//     standalone: true,
//     imports: [CommonModule, RouterOutlet, MatButtonModule, MatIconModule],
//     template: `
//         <div class="w-full mx-auto p-6 bg-white rounded overflow-hidden shadow-lg">
//             <!-- Encabezado principal -->
//             <div class="flex justify-between items-center mb-2 bg-slate-300 text-black p-4 rounded">
//                 <h2 class="text-2xl font-bold">
//                     Lista de <span class="text-primary">Calificaciones</span>
//                 </h2>
//                 <button mat-flat-button color="primary" (click)="goNew()">
//                     <mat-icon [svgIcon]="'heroicons_outline:plus'"></mat-icon>
//                     <span class="ml-2">Nueva Calificación</span>
//                 </button>
//             </div>
//             <div class="bg-white rounded overflow-hidden shadow-lg">
//                 <div class="p-2 overflow-scroll px-0">
//                     <table class="w-full table-fixed">
//                         <thead class="bg-primary-600 text-white">
//                         <tr>
//                             <th class="w-1/6 table-head text-center px-5 border-r">#</th>
//                             <th class="w-2/6 table-header text-center px-5 border-r">Estudiante ID</th>
//                             <th class="w-2/6 table-header text-center px-5 border-r">Curso ID</th>
//                             <th class="w-2/6 table-header text-center px-5 border-r">Nota</th>
//                             <th class="w-1/6 table-header text-center px-5 border-r">Acciones</th>
//                         </tr>
//                         </thead>
//                         <tbody class="text-center">
//                         <tr *ngFor="let calificacion of calificaciones; index as i">
//                             <td class="px-5 border-r">{{ i + 1 }}</td>
//                             <td class="px-5 border-r">{{ calificacion.estudianteId }}</td>
//                             <td class="px-5 border-r">{{ calificacion.cursoId }}</td>
//                             <td class="px-5 border-r">{{ calificacion.nota }}</td>
//                             <td class="px-5 border-r">
//                                 <div class="flex items-center justify-center space-x-2">
//                                     <button mat-icon-button (click)="goEdit(calificacion)">
//                                         <mat-icon [svgIcon]="'heroicons_outline:pencil-alt'"></mat-icon>
//                                     </button>
//                                     <button mat-icon-button (click)="goDelete(calificacion)">
//                                         <mat-icon [svgIcon]="'heroicons_outline:trash'"></mat-icon>
//                                     </button>
//                                 </div>
//                             </td>
//                         </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     `
// })
// export class CalificacionListComponent implements OnInit {
//     @Input() calificaciones: Calificacion[] = [];
//     @Output() newEvent = new EventEmitter();
//     @Output() editEvent = new EventEmitter<Calificacion>();
//     @Output() deleteEvent = new EventEmitter<Calificacion>();
//
//     constructor(private _dialog: MatDialog) {
//     }
//
//     ngOnInit() {
//     }
//
//     goNew(): void {
//         this.newEvent.emit();
//     }
//
//     goEdit(calificacion: Calificacion): void {
//         this.editEvent.emit(calificacion);
//     }
//
//     goDelete(calificacion: Calificacion): void {
//         this.deleteEvent.emit(calificacion);
//     }
//
// }
