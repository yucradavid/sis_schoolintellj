import { Teacher } from '../models/teacher';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeacherNewComponent } from '../components/form/teacher-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherEditComponent } from '../components/form/teacher-edit.component';
import {ConfirmDialogService} from "../../../../../shared/confirm-dialog/confirm-dialog.service";
import {TeacherListComponent} from "../components";
import {TeacherService} from "../../../../../providers/services/setup/teacher.service";


@Component({
    selector: 'app-teachers-container',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        TeacherListComponent,
        TeacherNewComponent,
        TeacherEditComponent,
        FormsModule,
        ReactiveFormsModule,
    ],
    template: `
        <app-teacher-list
            class="w-full"
            [teachers]="teachers"
            (eventNew)="eventNew($event)"
            (eventEdit)="eventEdit($event)"

            (eventDelete)="eventDelete($event)"
        ></app-teacher-list>
    `,
})
export class TeacherContainerComponent implements OnInit {
    public error: string = '';
    public teachers: Teacher[] = [];
    public teacher = new Teacher();

    constructor(
    private _teacherService: TeacherService,
        private _confirmDialogService:ConfirmDialogService,
        private _matDialog: MatDialog,
    ) {}

    ngOnInit() {
        this.getTeachers();
    }

    getTeachers(): void {
        this._teacherService.getAll$().subscribe(
            (response) => {
                console.log(response);
                this.teachers = response;
            },
            (error) => {
                this.error = error;
            }
        );
    }

    public eventNew($event: boolean): void {
        if ($event) {
            const docenteForm = this._matDialog.open(TeacherNewComponent);
            docenteForm.componentInstance.title = 'Nuevo Product' || null;
            docenteForm.afterClosed().subscribe((result: any) => {
                if (result) {
                    this.saveTeacher(result);
                }
            });
        }
    }

    saveTeacher(data: Object): void {
        this._teacherService.add$(data).subscribe((response) => {
        if (response) {
            this.getTeachers()
        }
        });
    }

    eventEdit(idTeacher: number): void {
        const listById = this._teacherService
            .getById$(idTeacher)
            .subscribe(async (response) => {
                this.teacher = (response) || {};
                this.openModalEdit(this.teacher);
                listById.unsubscribe();
            });
    }

    openModalEdit(data: Teacher) {
        console.log(data);
        if (data) {
            const docenteForm = this._matDialog.open(TeacherEditComponent);
            docenteForm.componentInstance.title =`Editar <b>${data.nombreCompleto||data.id} </b>`;
            docenteForm.componentInstance.teacher = data;
            docenteForm.afterClosed().subscribe((result: any) => {
                if (result) {
                    this.editTeacher( data.id,result);
                }
            });
        }
    }

    editTeacher( idTeacher: number,data: Object) {
        this._teacherService.update$(idTeacher,data).subscribe((response) => {
            if (response) {
                this.getTeachers()
            }
        });
    }


    public eventDelete(idTeacher: number) {
        this._confirmDialogService.confirmDelete(
            {
                // title: 'Confirmación Personalizada',
                // message: `¿Quieres proceder con esta acción ${}?`,
            }
        ).then(() => {
            this._teacherService.delete$(idTeacher).subscribe((response) => {
                this.teachers = response;
            });
            this.getTeachers();
        }).catch(() => {
        });

    }
}
