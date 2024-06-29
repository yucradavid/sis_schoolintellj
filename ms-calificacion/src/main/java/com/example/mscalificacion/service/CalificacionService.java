package com.example.mscalificacion.service;


import com.example.mscalificacion.dto.CalificacionDto;
import com.example.mscalificacion.entity.Calificacion;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public interface CalificacionService {
    List<CalificacionDto> getAllCalificaciones();

    CalificacionDto getCalificacionById(Integer id);

    CalificacionDto createCalificacion(CalificacionDto calificacionDto);

    CalificacionDto updateCalificacion(Integer id, CalificacionDto calificacionDto);

    void deleteCalificacion(Integer id);

}
