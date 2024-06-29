package com.example.mscalificacion.dto;

import lombok.Data;

import java.util.Date;

@Data
public class CalificacionDto {
    private Integer id;

    private EstudianteDto estudianteDto;
    private CursoDto cursoDto;
    private float calificacion;
    private Date fecha;
}
