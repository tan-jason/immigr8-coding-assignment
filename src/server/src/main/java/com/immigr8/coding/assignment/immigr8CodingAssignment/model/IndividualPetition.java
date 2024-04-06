package com.immigr8.coding.assignment.immigr8CodingAssignment.model;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class IndividualPetition {
    @Id
    @Column(name = "id", nullable = false)
    private int id;

    private String petitionerName;
    private String beneficiaryName;
    private boolean employsFiftyPlusIndividuals;
    private boolean hasFiftyPlusNonImmigrantStatus;
    private String classification;

    @Convert(converter = BeneficiaryPriorStaysConverter.class)
    private BeneficiaryPriorStays beneficiaryPriorStays;

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
    private Interruptions interruptions;

    private String beneficiaryDuties;
    private String beneficiaryDutiesUS;
    private String beneficiaryExperience;



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
