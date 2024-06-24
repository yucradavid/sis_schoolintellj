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
                <!-- Nombre completo -->
                <div class="mb-4">
                    <label for="nombreCompleto" class="block text-sm font-medium text-gray-700">Nombre completo</label>
                    <input type="text" id="nombreCompleto" matInput formControlName="nombreCompleto" placeholder="Nombre completo" required
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                </div>

                <!-- Fecha de nacimiento -->
                <div class="mb-4">
                    <label for="fechaNacimiento" class="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
                    <input type="date" id="fechaNacimiento" matInput formControlName="fechaNacimiento" required
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                </div>

                <!-- Dirección -->
                <div class="mb-4">
                    <label for="direccion" class="block text-sm font-medium text-gray-700">Dirección</label>
                    <input type="text" id="direccion" matInput formControlName="direccion" placeholder="Dirección" required
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                </div>

                <!-- Teléfono -->
                <div class="mb-4">
                    <label for="telefono" class="block text-sm font-medium text-gray-700">Teléfono</label>
                    <input type="tel" id="telefono" matInput formControlName="telefono" placeholder="Teléfono" required
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                </div>

                <!-- Correo electrónico -->
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
                    <input type="email" id="email" matInput formControlName="email" placeholder="Correo electrónico" required
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                </div>

                <!-- Especialidad -->
                <div class="mb-4">
                    <label for="especialidad" class="block text-sm font-medium text-gray-700">Especialidad</label>
                    <input type="text" id="especialidad" matInput formControlName="especialidad" placeholder="Especialidad" required
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                </div>

                <!-- Acciones -->
                <div class="flex justify-end mt-6 space-x-4">
                    <button mat-raised-button color="warn" (click)="cancelForm()">Cancelar</button>
                    <button mat-raised-button color="primary" (click)="saveForm()" [disabled]="!teacherForm.valid">Guardar</button>
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
