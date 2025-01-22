package com.covaire.api_rest.controller;

import com.covaire.api_rest.model.CarpoolingArea;
import com.covaire.api_rest.service.CarpoolingAreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/carpoolingareas")
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

    @GetMapping("/{region}")
    public String getAllCarpoolingAreasByRegion(@PathVariable String region) {
        return "All carpooling areas by region " + region;
    }

    @GetMapping("/{region}/{codeDepartement}")
    public String getAllCarpoolingAreasByCodeDepartement(@PathVariable String region, @PathVariable int codeDepartement) {
        return "All carpooling areas by code postal " + region + " " + codeDepartement;
    }
}
