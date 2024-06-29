// import { Component, Input, OnInit } from '@angular/core';
// import {
//     FormBuilder,
//     FormControl,
//     FormGroup,
//     FormsModule,
//     ReactiveFormsModule,
//     Validators
// } from '@angular/forms';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatDialogRef } from '@angular/material/dialog';
// import { Calificacion } from '../../models/calificacion';
//
// @Component({
//     selector: 'app-calificacion-edit',
//     standalone: true,
//     imports: [
//         FormsModule,
//         MatIconModule,
//         MatButtonModule,
//         ReactiveFormsModule,
//         MatSlideToggleModule,
//         MatFormFieldModule,
//         MatInputModule
//     ],
//     template: `
//         <div class="flex flex-col max-w-240 md:min-w-160 max-h-screen -m-6">
//             <!-- Header -->
//             <div class="flex flex-0 items-center justify-between h-16 pr-3 sm:pr-5 pl-6 sm:pl-8 bg-primary text-on-primary">
//                 <div class="text-lg font-medium">{{ title }}</div>
//                 <button mat-icon-button (click)="cancelForm()" [tabIndex]="-1">
//                     <mat-icon class="text-current" [svgIcon]="'heroicons_outline:x-mark'"></mat-icon>
//                 </button>
//             </div>
//
//             <!-- Form -->
//             <form class="flex flex-col flex-auto p-6 sm:p-8 overflow-y-auto" [formGroup]="calificacionForm">
//                 <mat-form-field>
//                     <mat-label>Estudiante ID</mat-label>
//                     <input matInput formControlName="estudianteId" type="number" required />
//                 </mat-form-field>
//                 <mat-form-field>
//                     <mat-label>Curso ID</mat-label>
//                     <input matInput formControlName="cursoId" type="number" required />
//                 </mat-form-field>
//                 <mat-form-field>
//                     <mat-label>Nota</mat-label>
//                     <input matInput formControlName="nota" type="number" required />
//                 </mat-form-field>
//
//                 <!-- Actions -->
//                 <div class="flex flex-col sm:flex-row sm:items-center justify-between mt-4 sm:mt-6">
//                     <div class="flex space-x-2 items-center mt-4 sm:mt-0 ml-auto">
//                         <button mat-stroked-button color="warn" (click)="cancelForm()">Cancelar</button>
//                         <button mat-stroked-button color="primary" (click)="saveForm()">Guardar</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     `
// })
// export class CalificacionEditComponent implements OnInit {
//     calificacionForm = new FormGroup({
//         estudianteId: new FormControl('', [Validators.required]),
//         cursoId: new FormControl('', [Validators.required]),
//         nota: new FormControl('', [Validators.required])
//     });
//
//     @Input() title: string = '';
//     @Input() calificacion: Calificacion = new class implements Calificacion {
//         comentarios: string;
//         cursoId: number;
//         estudianteId: number;
//         id: number;
//         nota: number;
//     }();
//
//     constructor(
//         private _matDialog: MatDialogRef<CalificacionEditComponent>
//     ) {}
//
//     ngOnInit() {
//         if (this.calificacion) {
//             this.calificacionForm.patchValue({
//                 estudianteId: this.calificacion.estudianteId,
//                 cursoId: this.calificacion.cursoId,
//                 nota: this.calificacion.nota
//             });
//         }
//     }
//
//     public saveForm(): void {
//         if (this.calificacionForm.valid) {
//             this._matDialog.close(this.calificacionForm.value);
//         }
//     }
//
//     public cancelForm(): void {
//         this._matDialog.close('');
//     }
// }
