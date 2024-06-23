import { Component, Input, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

import { abcForms } from '../../../../../../../environments/generals';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-teachers-new',
    standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    template: `
        <div class="flex flex-col max-w-240 md:min-w-160 max-h-screen -m-6">
            <!-- Header -->
            <div class="flex flex-0 items-center justify-between h-16 pr-3 sm:pr-5 pl-6 sm:pl-8 bg-primary text-on-primary">
                <div class="text-lg font-medium">{{ title }}</div>
                <button mat-icon-button (click)="cancelForm()" [tabIndex]="-1">
                    <mat-icon
                        class="text-current"
                        [svgIcon]="'heroicons_outline:x-mark'"
                    ></mat-icon>
                </button>
            </div>


            <!-- Compose form -->
            <form class="flex flex-col flex-auto p-6 sm:p-8 overflow-y-auto" [formGroup]="teacherForm">
                <mat-form-field>
                    <mat-label>Nombre</mat-label>
                    <input matInput formControlName="nombreCompleto" />
                </mat-form-field>
                <mat-form-field>
                    <mat-label>Apellidos</mat-label>
                    <input matInput formControlName="fechaNacimiento" />
                </mat-form-field>
                <mat-form-field>
                    <mat-label>Direccion</mat-label>
                    <input matInput formControlName="direccion" />
                </mat-form-field>
                <mat-form-field>
                    <mat-label>Telefono</mat-label>
                    <input matInput formControlName="telefono" />
                </mat-form-field>
                <mat-form-field>
                    <mat-label>Correo</mat-label>
                    <input matInput formControlName="email" />
                </mat-form-field>
                <mat-form-field>
                    <mat-label>Especialidad</mat-label>
                    <input matInput formControlName="especialidad" />
                </mat-form-field>
                <!-- Actions -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mt-4 sm:mt-6">
                    <div class="flex space-x-2 items-center mt-4 sm:mt-0 ml-auto">
                        <button mat-stroked-button [color]="'warn'" (click)="cancelForm()">Cancelar</button>
                        <button mat-stroked-button [color]="'primary'" (click)="saveForm()">
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    `,
})
export class TeacherNewComponent implements OnInit {
    @Input() title: string = '';
    abcForms: any;
    teacherForm = new FormGroup({

        nombreCompleto: new FormControl('', [Validators.required]),
        fechaNacimiento: new FormControl('', [Validators.required]),
        direccion: new FormControl('', [Validators.required]),
        telefono: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        especialidad: new FormControl('', [Validators.required]),
    });

    constructor(private _matDialog: MatDialogRef<TeacherNewComponent>) {}

    ngOnInit() {
        this.abcForms = abcForms;
    }

    public saveForm(): void {
        if (this.teacherForm.valid) {
            this._matDialog.close(this.teacherForm.value);
        }
    }

    public cancelForm(): void {
        this._matDialog.close('');
    }
}
