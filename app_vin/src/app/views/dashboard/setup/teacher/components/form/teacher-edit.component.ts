import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {abcForms} from '../../../../../../../environments/generals';
import {Teacher} from '../../models/teacher';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-teachers-edit',
    standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule
    ],
    template: `
        <div class="flex flex-col max-w-240 md:min-w-160 max-h-screen -m-6">
            <!-- Header -->
            <div
                class="flex flex-0 items-center justify-between h-16 pr-3 sm:pr-5 pl-6 sm:pl-8 bg-primary text-on-primary">
                <div class="text-lg font-medium" [innerHTML]="title"></div>
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
                    <mat-label>Nombre Completo</mat-label>
                    <input matInput formControlName="nombreCompleto"/>
                </mat-form-field>
                <mat-form-field>
                    <mat-label>Fecha de Nacimiento</mat-label>
                    <input matInput type="date" formControlName="fechaNacimiento"/>
                </mat-form-field>
                <mat-form-field>
                    <mat-label>Dirección</mat-label>
                    <input matInput formControlName="direccion"/>
                </mat-form-field>
                <mat-form-field>
                    <mat-label>Teléfono</mat-label>
                    <input matInput formControlName="telefono"/>
                </mat-form-field>
                <mat-form-field>
                    <mat-label>Email</mat-label>
                    <input matInput formControlName="email"/>
                </mat-form-field>
                <mat-form-field>
                    <mat-label>Especialidad</mat-label>
                    <input matInput formControlName="especialidad"/>
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
    `
})
export class TeacherEditComponent implements OnInit {
    teacherForm = new FormGroup({

        nombreCompleto: new FormControl('', [Validators.required]),
        fechaNacimiento: new FormControl(new Date(), [Validators.required]),
        direccion: new FormControl('', [Validators.required]),
        telefono: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        especialidad: new FormControl('', [Validators.required]),
        //cursosAsignados:new FormControl([])

    });

    @Input() title: string = '';
    @Input() teacher: Teacher = new Teacher();
    abcForms: any;

    constructor(
        private formBuilder: FormBuilder,
        private _matDialog: MatDialogRef<TeacherEditComponent>,
    ) {
    }

    ngOnInit() {
        this.abcForms = abcForms;

        if (this.teacher) {
            console.log(this.teacher);
            console.log("vacio: ", this.teacherForm.value);

            this.teacherForm.patchValue({
                nombreCompleto: this.teacher.nombreCompleto,
                fechaNacimiento: this.teacher.fechaNacimiento,
                direccion: this.teacher.direccion,
                telefono: this.teacher.telefono,
                email: this.teacher.email,
                especialidad: this.teacher.especialidad,

            });
            /*this.teacherForm.patchValue({
                ...this.teacher,
                fechaNacimiento: this.teacher.fechaNacimiento ? this.teacher.fechaNacimiento.toISOString().substring(0, 10) : ''
            });*/
            console.log("llenado: ", this.teacherForm.value);
        }
    }

    public saveForm(): void {
        this.teacherForm.value.fechaNacimiento = null;
        if (this.teacherForm.valid) {
            const formValue = this.teacherForm.value;
            this._matDialog.close({
                ...formValue,
                fechaNacimiento: new Date(formValue.fechaNacimiento)
            });
        }
    }

    public cancelForm(): void {
        this._matDialog.close('');
    }
}
