package com.covaire.api_rest.service;

import com.covaire.api_rest.model.CarpoolingArea;
import com.covaire.api_rest.repository.CarpoolingAreaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarpoolingAreaService {

    private final CarpoolingAreaRepository repository;

    @Autowired
    public CarpoolingAreaService(CarpoolingAreaRepository carpoolingAreaRepository) {
        this.repository = carpoolingAreaRepository;
    }

    public List<CarpoolingArea> getAllCarpoolingAreas() {
        return repository.findAll();
    }
}
