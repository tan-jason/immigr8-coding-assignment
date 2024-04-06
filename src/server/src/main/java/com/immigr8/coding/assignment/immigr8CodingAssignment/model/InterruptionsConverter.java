package com.immigr8.coding.assignment.immigr8CodingAssignment.model;

import jakarta.persistence.AttributeConverter;

public class InterruptionsConverter implements AttributeConverter<Interruptions, String> {
    @Override
    public String convertToDatabaseColumn(Interruptions interruptions) {
        if (interruptions == null) {
            return null;
        }

        return interruptions.getEmploymentDateStart() + "," + interruptions.getEmploymentDateEnd() + "," + interruptions.getInterruptionExplanation();
    }

    @Override
    public Interruptions convertToEntityAttribute(String dbInterruptions) {
        if (dbInterruptions == null) {
            return null;
        }

        String[] interruptionsAttributes = dbInterruptions.split(",");
        if (interruptionsAttributes.length != 3) {
            return null;
        }

        String employmentDateStart = interruptionsAttributes[0];
        String employmentDateEnd = interruptionsAttributes[1];
        String interruptionsExplanation = interruptionsAttributes[2];

        return new Interruptions(employmentDateStart, employmentDateEnd, interruptionsExplanation);
    }
}
