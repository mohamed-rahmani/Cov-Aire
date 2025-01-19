package com.covaire.api_rest.model;

import jakarta.persistence.*;

@Entity
@Table(name="carpooling_area")
public class CarpoolingArea {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "carpooling_area_id_seq")
    @SequenceGenerator(name = "carpooling_area_id_seq", sequenceName = "carpooling_area_id_seq", allocationSize = 1)
    private Integer id;

    @Column(name = "adress", length = 255)
    private String adress;

    @Column(name = "bike", length = 255)
    private String bike;

    @Column(name = "bouygues4gcoverage", length = 255)
    private String bouygues_4g_coverage;

    @Column(name = "city", length = 255)
    private String city;

    @Column(name = "comment", length = 255)
    private String comment;

    @Column(name = "department", length = 255)
    private String department;

    @Column(name = "epci_name", length = 255)
    private String epci_name;

    @Column(name = "free4gcoverage", length = 255)
    private String free_4g_coverage;

    @Column(name = "geographic_coordinates", length = 255)
    private String geographic_coordinates;

    @Column(name = "light", length = 255)
    private String light;

    @Column(name = "opening", length = 255)
    private String opening;

    @Column(name = "orange4gcoverage", length = 255)
    private String orange_4g_coverage;

    @Column(name = "owner", length = 255)
    private String owner;

    @Column(name = "parking_type", length = 255)
    private String parking_type;

    @Column(name = "place")
    private Integer place;

    @Column(name = "place_name", length = 255)
    private String place_name;

    @Column(name = "pmr")
    private Integer pmr;

    @Column(name = "population", length = 255)
    private String population;

    @Column(name = "price", length = 255)
    private String price;

    @Column(name = "public_transport", length = 355)
    private String public_transport;

    @Column(name = "region", length = 255)
    private String region;

    @Column(name = "sfr4gcoverage", length = 255)
    private String sfr_4g_coverage;

    @Column(name = "source", length = 255)
    private String source;

    @Column(name = "zip_code")
    private Integer zip_code;

    public CarpoolingArea() {
    }

    public CarpoolingArea(Integer id, String adress, String bike, String bouygues_4g_coverage, String city, String comment, String department, String epci_name, String free_4g_coverage, String geographic_coordinates, String light, String opening, String orange_4g_coverage, String owner, String parking_type, Integer place, String place_name, Integer pmr, String population, String price, String public_transport, String region, String sfr_4g_coverage, String source, Integer zip_code) {
        this.id = id;
        this.adress = adress;
        this.bike = bike;
        this.bouygues_4g_coverage = bouygues_4g_coverage;
        this.city = city;
        this.comment = comment;
        this.department = department;
        this.epci_name = epci_name;
        this.free_4g_coverage = free_4g_coverage;
        this.geographic_coordinates = geographic_coordinates;
        this.light = light;
        this.opening = opening;
        this.orange_4g_coverage = orange_4g_coverage;
        this.owner = owner;
        this.parking_type = parking_type;
        this.place = place;
        this.place_name = place_name;
        this.pmr = pmr;
        this.population = population;
        this.price = price;
        this.public_transport = public_transport;
        this.region = region;
        this.sfr_4g_coverage = sfr_4g_coverage;
        this.source = source;
        this.zip_code = zip_code;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getBike() {
        return bike;
    }

    public void setBike(String bike) {
        this.bike = bike;
    }

    public String getBouygues_4g_coverage() {
        return bouygues_4g_coverage;
    }

    public void setBouygues_4g_coverage(String bouygues_4g_coverage) {
        this.bouygues_4g_coverage = bouygues_4g_coverage;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getEpci_name() {
        return epci_name;
    }

    public void setEpci_name(String epci_name) {
        this.epci_name = epci_name;
    }

    public String getFree_4g_coverage() {
        return free_4g_coverage;
    }

    public void setFree_4g_coverage(String free_4g_coverage) {
        this.free_4g_coverage = free_4g_coverage;
    }

    public String getGeographic_coordinates() {
        return geographic_coordinates;
    }

    public void setGeographic_coordinates(String geographic_coordinates) {
        this.geographic_coordinates = geographic_coordinates;
    }

    public String getLight() {
        return light;
    }

    public void setLight(String light) {
        this.light = light;
    }

    public String getOpening() {
        return opening;
    }

    public void setOpening(String opening) {
        this.opening = opening;
    }

    public String getOrange_4g_coverage() {
        return orange_4g_coverage;
    }

    public void setOrange_4g_coverage(String orange_4g_coverage) {
        this.orange_4g_coverage = orange_4g_coverage;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getParking_type() {
        return parking_type;
    }

    public void setParking_type(String parking_type) {
        this.parking_type = parking_type;
    }

    public Integer getPlace() {
        return place;
    }

    public void setPlace(Integer place) {
        this.place = place;
    }

    public String getPlace_name() {
        return place_name;
    }

    public void setPlace_name(String place_name) {
        this.place_name = place_name;
    }

    public Integer getPmr() {
        return pmr;
    }

    public void setPmr(Integer pmr) {
        this.pmr = pmr;
    }

    public String getPopulation() {
        return population;
    }

    public void setPopulation(String population) {
        this.population = population;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getPublic_transport() {
        return public_transport;
    }

    public void setPublic_transport(String public_transport) {
        this.public_transport = public_transport;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getSfr4gcoverage() {
        return sfr_4g_coverage;
    }

    public void setSfr4gcoverage(String sfr_4g_coverage) {
        this.sfr_4g_coverage = sfr_4g_coverage;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public Integer getZip_code() {
        return zip_code;
    }

    public void setZip_code(Integer zip_code) {
        this.zip_code = zip_code;
    }

    @Override
    public String toString() {
        return "CarpoolingArea{" +
                "id=" + id +
                ", adress='" + adress + '\'' +
                ", bike='" + bike + '\'' +
                ", bouygues_4g_coverage='" + bouygues_4g_coverage + '\'' +
                ", city='" + city + '\'' +
                ", comment='" + comment + '\'' +
                ", department='" + department + '\'' +
                ", epci_name='" + epci_name + '\'' +
                ", free_4g_coverage='" + free_4g_coverage + '\'' +
                ", geographic_coordinates='" + geographic_coordinates + '\'' +
                ", light='" + light + '\'' +
                ", opening='" + opening + '\'' +
                ", orange_4g_coverage='" + orange_4g_coverage + '\'' +
                ", owner='" + owner + '\'' +
                ", parking_type='" + parking_type + '\'' +
                ", place=" + place +
                ", place_name='" + place_name + '\'' +
                ", pmr=" + pmr +
                ", population='" + population + '\'' +
                ", price='" + price + '\'' +
                ", public_transport='" + public_transport + '\'' +
                ", region='" + region + '\'' +
                ", sfr4gcoverage='" + sfr_4g_coverage + '\'' +
                ", source='" + source + '\'' +
                ", zip_code=" + zip_code +
                '}';
    }
}
