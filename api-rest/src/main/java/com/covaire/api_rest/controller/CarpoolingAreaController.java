package com.covaire.api_rest.controller;

import com.covaire.api_rest.model.CarpoolingArea;
import com.covaire.api_rest.service.CarpoolingAreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/carpooling-areas")
public class CarpoolingAreaController {

    private final CarpoolingAreaService service;

    @Autowired
    public CarpoolingAreaController(CarpoolingAreaService service) {
        this.service = service;
    }

    @GetMapping
    public List<CarpoolingArea> getAllCarpoolingAreas() {
        return service.getAllCarpoolingAreas();
    }

    @GetMapping("/regions")
    public List<String> getAllRegions() {
        return service.getAllRegions();
    }

    @GetMapping("/region/{region}")
    public ResponseEntity<List<CarpoolingArea>> getAllCarpoolingAreasByRegion(@PathVariable String region) {
        List<String> regions = service.getAllRegions();
        
        if(regions.contains(region)) {
            return new ResponseEntity<>(service.getAllCarpoolingAreasByRegion(region), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/departements")
    public List<String> getAllDepartments() {
        return service.getAllDepartments();
    }

    @GetMapping("/departement/{department}")
    public ResponseEntity<List<CarpoolingArea>> getAllCarpoolingAreasByDepartment(@PathVariable String department) {
        List<String> departments = service.getAllDepartments();

        if(departments.contains(department)) {
            return new ResponseEntity<>(service.getAllCarpoolingAreasByDepartment(department), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/departements/{region}")
    public List<String> getAllDepartmentsByRegion(@PathVariable String region) {
        return service.getAllDepartmentsByRegion(region);
    }
}
