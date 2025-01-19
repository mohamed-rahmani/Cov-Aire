package com.covaire.api_rest.repository;

import com.covaire.api_rest.model.CarpoolingArea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarpoolingAreaRepository extends JpaRepository<CarpoolingArea, Integer> {
}
