package com.example.mscalificacion.controller;


import com.example.mscalificacion.dto.CalificacionDto;
import com.example.mscalificacion.entity.Calificacion;
import com.example.mscalificacion.service.CalificacionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/calificacion")
public class CalificacionController {
    @Autowired
    private CalificacionService calificacionService;

    @GetMapping
    public List<CalificacionDto> getAllCalificaciones() {
        return calificacionService.getAllCalificaciones();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CalificacionDto> getCalificacionById(@PathVariable Integer id) {
        CalificacionDto calificacionDto = calificacionService.getCalificacionById(id);
        return ResponseEntity.ok(calificacionDto);
    }

    @PostMapping
    public ResponseEntity<CalificacionDto> createCalificacion(@RequestBody CalificacionDto calificacionDto) {
        CalificacionDto newCalificacionDto = calificacionService.createCalificacion(calificacionDto);
        return new ResponseEntity<>(newCalificacionDto, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CalificacionDto> updateCalificacion(@PathVariable Integer id, @RequestBody CalificacionDto calificacionDto) {
        CalificacionDto updatedCalificacionDto = calificacionService.updateCalificacion(id, calificacionDto);
        return ResponseEntity.ok(updatedCalificacionDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCalificacion(@PathVariable Integer id) {
        calificacionService.deleteCalificacion(id);
        return ResponseEntity.noContent().build();
    }
}
