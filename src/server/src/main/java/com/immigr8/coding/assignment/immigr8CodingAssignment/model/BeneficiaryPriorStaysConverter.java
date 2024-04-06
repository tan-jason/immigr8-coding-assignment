package com.immigr8.coding.assignment.immigr8CodingAssignment.model;

import jakarta.persistence.AttributeConverter;

public class BeneficiaryPriorStaysConverter implements AttributeConverter<BeneficiaryPriorStays, String> {

    @Override
    public String convertToDatabaseColumn(BeneficiaryPriorStays beneficiaryPriorStays) {
        if (beneficiaryPriorStays == null) {
            return null;
        }

        return beneficiaryPriorStays.getSubjectName() + "," + beneficiaryPriorStays.getPeriodStart() + "," + beneficiaryPriorStays.getPeriodEnd();
    }

    @Override
    public BeneficiaryPriorStays convertToEntityAttribute(String dbPriorStays) {
        if (dbPriorStays == null) {
            return null;
        }

        String[] priorStaysAttributes = dbPriorStays.split(",");
        if (priorStaysAttributes.length != 3) {
            return null;
        }

        String subjectName = priorStaysAttributes[0];
        String periodStart = priorStaysAttributes[1];
        String periodEnd = priorStaysAttributes[2];

        return new BeneficiaryPriorStays(subjectName, periodStart, periodEnd);
    }
}
