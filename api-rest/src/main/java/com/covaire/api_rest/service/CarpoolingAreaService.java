package com.covaire.api_rest.service;

import com.covaire.api_rest.model.CarpoolingArea;
import com.covaire.api_rest.repository.CarpoolingAreaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Comparator;
import java.util.stream.Collectors;
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

    public List<String> getAllRegions() {
        return repository.findAll().stream()
                .map(CarpoolingArea::getRegion)
                .distinct()
                .collect(Collectors.toList());
    }

    public List<CarpoolingArea>  getAllCarpoolingAreasByRegion(String region) {
        return repository.findAll().stream()
                .filter(carpoolingArea -> region.equalsIgnoreCase(carpoolingArea.getRegion()))
                .collect(Collectors.toList());
    }

    public List<String> getAllDepartments() {
        return repository.findAll().stream()
                .map(CarpoolingArea::getDepartment)
                .distinct()
                .sorted(Comparator.nullsLast(String::compareTo))
                .collect(Collectors.toList());
    }

    public List<CarpoolingArea> getAllCarpoolingAreasByDepartment(String department) {
        return repository.findAll().stream()
                .filter(carpoolingArea -> department.equals(carpoolingArea.getDepartment()))
                .collect(Collectors.toList());
    }

    public List<String> getAllDepartmentsByRegion(String region) {
        return repository.findAll().stream()
                .filter(carpoolingArea -> region.equals(carpoolingArea.getRegion()))
                .map(CarpoolingArea::getDepartment)
                .distinct()
                .sorted(Comparator.nullsLast(String::compareTo))
                .collect(Collectors.toList());
    }

    public List<CarpoolingArea> getCarpoolingAreasByKeyword(String keyword) {
        String decodedKeyword = URLDecoder.decode(keyword, StandardCharsets.UTF_8).replace(" ", "").toLowerCase();
        return repository.findAll().stream()
                .filter(area -> {
                    if (decodedKeyword.matches("\\d{4,5}")) {
                        return area.getZip_code() != null && area.getZip_code().toString().equals(decodedKeyword);
                    }
                    else if (decodedKeyword.matches("\\d{1,3}")) {
                        return area.getZip_code() != null && area.getZip_code().toString().startsWith(decodedKeyword);
                    }
                    else if (decodedKeyword.matches("-?\\d{1,3}\\.\\d+\\s*,?\\s*-?\\d{1,3}\\.\\d+")) {
                        return area.getGeographic_coordinates() != null && area.getGeographic_coordinates().replace(" ", "").equalsIgnoreCase(decodedKeyword.replace(" ", ""));
                    }
                    else {
                        return (area.getAdress() != null && area.getAdress().replace(" ", "").toLowerCase().contains(decodedKeyword)) ||
                                (area.getCity() != null && area.getCity().toLowerCase().contains(decodedKeyword)) ||
                                (area.getDepartment() != null && area.getDepartment().replace(" ", "").toLowerCase().contains(decodedKeyword)) ||
                                (area.getRegion() != null && area.getRegion().toLowerCase().replace(" ", "").contains(decodedKeyword)) ||
                                (area.getPlace_name() != null && area.getPlace_name().replace(" ", "").toLowerCase().contains(decodedKeyword));
                    }
                })
                .collect(Collectors.toList());
    }
}
