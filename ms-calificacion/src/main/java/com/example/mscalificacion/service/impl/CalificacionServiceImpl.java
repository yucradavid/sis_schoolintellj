package com.example.mscalificacion.service.impl;


import com.example.mscalificacion.dto.CalificacionDto;
import com.example.mscalificacion.entity.Calificacion;
import com.example.mscalificacion.repository.CalificacionRepository;
import com.example.mscalificacion.service.CalificacionService;
import com.example.mscalificacion.Excepciones.ResourceNotFoundException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CalificacionServiceImpl implements CalificacionService {
    @Autowired
    private CalificacionRepository calificacionRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<CalificacionDto> getAllCalificaciones() {
        List<Calificacion> calificaciones = calificacionRepository.findAll();
        if (calificaciones.isEmpty()) {
            throw new ResourceNotFoundException("No se encontraron calificaciones");
        }
        return calificaciones.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public CalificacionDto getCalificacionById(Integer id) {
        Calificacion calificacion = calificacionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Calificacion no encontrada con ID: " + id));
        return convertToDto(calificacion);
    }

    @Override
    public CalificacionDto createCalificacion(CalificacionDto calificacionDto) {
        Calificacion calificacion = convertToEntity(calificacionDto);
        Calificacion savedCalificacion = calificacionRepository.save(calificacion);
        return convertToDto(savedCalificacion);
    }

    @Override
    public CalificacionDto updateCalificacion(Integer id, CalificacionDto calificacionDto) {
        Calificacion existingCalificacion = calificacionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Calificacion no encontrada con ID: " + id));
        // Actualizar los campos necesarios de existingCalificacion con calificacionDto
        existingCalificacion.setCalificacion(calificacionDto.getCalificacion());
        existingCalificacion.setFecha(calificacionDto.getFecha());
        // Guardar la calificación actualizada
        Calificacion updatedCalificacion = calificacionRepository.save(existingCalificacion);
        return convertToDto(updatedCalificacion);
    }

    @Override
    public void deleteCalificacion(Integer id) {
        Calificacion calificacion = calificacionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Calificacion no encontrada con ID: " + id));
        calificacionRepository.delete(calificacion);
    }

    // Métodos privados para conversión entre entidad y DTO
    private CalificacionDto convertToDto(Calificacion calificacion) {
        return modelMapper.map(calificacion, CalificacionDto.class);
    }

    private Calificacion convertToEntity(CalificacionDto calificacionDto) {
        return modelMapper.map(calificacionDto, Calificacion.class);
    }
}
