package com.immigr8.coding.assignment.immigr8CodingAssignment.model;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class FormData {
    @Id
    @Column(name = "id", nullable = false)
    private int id;

    private String petitionerName;
    private String beneficiaryName;
    private String petitionType;
    private boolean employsFiftyPlusIndividuals;
    private boolean hasFiftyPlusNonImmigrantStatus;

    // individual petition data
    private String classification;

    @Convert(converter = BeneficiaryPriorStaysConverter.class)
    private BeneficiaryPriorStays[] beneficiaryPriorStays;

    private String employerNameAbroad;
    private String employerAbroadAddress;
    private boolean isApt;
    private boolean isSte;
    private boolean isFlr;
    private int aptSteFlrNumber;
    private String city;
    private String state;
    private String zipCode;
    private String province;
    private String postalCode;
    private String country;

    @Convert(converter = InterruptionsConverter.class)
    private Interruptions[] interruptions;

    private String beneficiaryDuties;
    private String beneficiaryDutiesUS;
    private String beneficiaryExperience;
    private String companyRelation;

    @Convert(converter = StockOwnershipDetailsConverter.class)
    private StockOwnershipDetails[] stockOwnershipDetails;

    private boolean hasSameQualifyingRelationship;
    private boolean isOpeningNewOffice;
    private boolean isStationedOffsite;
    private String controlBeneficiaryWorkDetails;
    private String placementDescription;

    // blank petition data
    @Convert(converter = ForeignBranchesConverter.class)
    private ForeignBranches[] foreignBranches;

    public FormData() {
    }

    public FormData(int id, String petitionerName, String beneficiaryName, String petitionType, boolean employsFiftyPlusIndividuals, String classification, BeneficiaryPriorStays[] beneficiaryPriorStays, String employerNameAbroad, String employerAbroadAddress, String city, String country, Interruptions[] interruptions, String beneficiaryDuties, String beneficiaryDutiesUS, String beneficiaryExperience, String companyRelation, StockOwnershipDetails[] stockOwnershipDetails, boolean hasSameQualifyingRelationship, boolean isOpeningNewOffice, boolean isStationedOffsite, ForeignBranches[] foreignBranches) {
        this.id = id;
        this.petitionerName = petitionerName;
        this.beneficiaryName = beneficiaryName;
        this.petitionType = petitionType;
        this.employsFiftyPlusIndividuals = employsFiftyPlusIndividuals;
        this.classification = classification;
        this.beneficiaryPriorStays = beneficiaryPriorStays;
        this.employerNameAbroad = employerNameAbroad;
        this.employerAbroadAddress = employerAbroadAddress;
        this.city = city;
        this.country = country;
        this.interruptions = interruptions;
        this.beneficiaryDuties = beneficiaryDuties;
        this.beneficiaryDutiesUS = beneficiaryDutiesUS;
        this.beneficiaryExperience = beneficiaryExperience;
        this.companyRelation = companyRelation;
        this.stockOwnershipDetails = stockOwnershipDetails;
        this.hasSameQualifyingRelationship = hasSameQualifyingRelationship;
        this.isOpeningNewOffice = isOpeningNewOffice;
        this.isStationedOffsite = isStationedOffsite;
        this.foreignBranches = foreignBranches;
    }

    public String getPetitionerName() {
        return petitionerName;
    }

    public void setPetitionerName(String petitionerName) {
        this.petitionerName = petitionerName;
    }

    public String getBeneficiaryName() {
        return beneficiaryName;
    }

    public void setBeneficiaryName(String beneficiaryName) {
        this.beneficiaryName = beneficiaryName;
    }

    public String getPetitionType() {
        return petitionType;
    }

    public void setPetitionType(String petitionType) {
        this.petitionType = petitionType;
    }

    public boolean isEmploysFiftyPlusIndividuals() {
        return employsFiftyPlusIndividuals;
    }

    public void setEmploysFiftyPlusIndividuals(boolean employsFiftyPlusIndividuals) {
        this.employsFiftyPlusIndividuals = employsFiftyPlusIndividuals;
    }

    public boolean isHasFiftyPlusNonImmigrantStatus() {
        return hasFiftyPlusNonImmigrantStatus;
    }

    public void setHasFiftyPlusNonImmigrantStatus(boolean hasFiftyPlusNonImmigrantStatus) {
        this.hasFiftyPlusNonImmigrantStatus = hasFiftyPlusNonImmigrantStatus;
    }

    public String getClassification() {
        return classification;
    }

    public void setClassification(String classification) {
        this.classification = classification;
    }

    public BeneficiaryPriorStays[] getBeneficiaryPriorStays() {
        return beneficiaryPriorStays;
    }

    public void setBeneficiaryPriorStays(BeneficiaryPriorStays[] beneficiaryPriorStays) {
        this.beneficiaryPriorStays = beneficiaryPriorStays;
    }

    public String getEmployerNameAbroad() {
        return employerNameAbroad;
    }

    public void setEmployerNameAbroad(String employerNameAbroad) {
        this.employerNameAbroad = employerNameAbroad;
    }

    public String getEmployerAbroadAddress() {
        return employerAbroadAddress;
    }

    public void setEmployerAbroadAddress(String employerAbroadAddress) {
        this.employerAbroadAddress = employerAbroadAddress;
    }

    public boolean isApt() {
        return isApt;
    }

    public void setApt(boolean apt) {
        isApt = apt;
    }

    public boolean isSte() {
        return isSte;
    }

    public void setSte(boolean ste) {
        isSte = ste;
    }

    public boolean isFlr() {
        return isFlr;
    }

    public void setFlr(boolean flr) {
        isFlr = flr;
    }

    public int getAptSteFlrNumber() {
        return aptSteFlrNumber;
    }

    public void setAptSteFlrNumber(int aptSteFlrNumber) {
        this.aptSteFlrNumber = aptSteFlrNumber;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Interruptions[] getInterruptions() {
        return interruptions;
    }

    public void setInterruptions(Interruptions[] interruptions) {
        this.interruptions = interruptions;
    }

    public String getBeneficiaryDuties() {
        return beneficiaryDuties;
    }

    public void setBeneficiaryDuties(String beneficiaryDuties) {
        this.beneficiaryDuties = beneficiaryDuties;
    }

    public String getBeneficiaryDutiesUS() {
        return beneficiaryDutiesUS;
    }

    public void setBeneficiaryDutiesUS(String beneficiaryDutiesUS) {
        this.beneficiaryDutiesUS = beneficiaryDutiesUS;
    }

    public String getBeneficiaryExperience() {
        return beneficiaryExperience;
    }

    public void setBeneficiaryExperience(String beneficiaryExperience) {
        this.beneficiaryExperience = beneficiaryExperience;
    }

    public String getCompanyRelation() {
        return companyRelation;
    }

    public void setCompanyRelation(String companyRelation) {
        this.companyRelation = companyRelation;
    }

    public StockOwnershipDetails[] getStockOwnershipDetails() {
        return stockOwnershipDetails;
    }

    public void setStockOwnershipDetails(StockOwnershipDetails[] stockOwnershipDetails) {
        this.stockOwnershipDetails = stockOwnershipDetails;
    }

    public boolean isHasSameQualifyingRelationship() {
        return hasSameQualifyingRelationship;
    }

    public void setHasSameQualifyingRelationship(boolean hasSameQualifyingRelationship) {
        this.hasSameQualifyingRelationship = hasSameQualifyingRelationship;
    }

    public boolean isOpeningNewOffice() {
        return isOpeningNewOffice;
    }

    public void setOpeningNewOffice(boolean openingNewOffice) {
        isOpeningNewOffice = openingNewOffice;
    }

    public boolean isStationedOffsite() {
        return isStationedOffsite;
    }

    public void setStationedOffsite(boolean stationedOffsite) {
        isStationedOffsite = stationedOffsite;
    }

    public String getControlBeneficiaryWorkDetails() {
        return controlBeneficiaryWorkDetails;
    }

    public void setControlBeneficiaryWorkDetails(String controlBeneficiaryWorkDetails) {
        this.controlBeneficiaryWorkDetails = controlBeneficiaryWorkDetails;
    }

    public String getPlacementDescription() {
        return placementDescription;
    }

    public void setPlacementDescription(String placementDescription) {
        this.placementDescription = placementDescription;
    }

    public ForeignBranches[] getForeignBranches() {
        return foreignBranches;
    }

    public void setForeignBranches(ForeignBranches[] foreignBranches) {
        this.foreignBranches = foreignBranches;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
