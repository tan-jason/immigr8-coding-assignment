package com.immigr8.coding.assignment.immigr8CodingAssignment.model;

import jakarta.persistence.AttributeConverter;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class InterruptionsConverter implements AttributeConverter<Interruptions[], String> {
    @Override
    public String convertToDatabaseColumn(Interruptions[] interruptions) {
        if (interruptions == null) {
            return null;
        }
        String interruptionsStr = "";

        for (Interruptions i : interruptions) {
            interruptionsStr = interruptionsStr + "{" +
                    "employmentDateStart: " + i.getEmploymentDateStart() + ", " +
                    "employmentDateEnd: " + i.getEmploymentDateEnd() + ", " +
                    "interruptionsExplanation: " + i.getInterruptionExplanation() + "},\n";
        }

        return interruptionsStr;
     }

    @Override
    public Interruptions[] convertToEntityAttribute(String dbInterruptions) {
        if (dbInterruptions == null) {
            return null;
        }

        int numBranches = 0;
        for (int i = 0; i < dbInterruptions.length(); i++) {
            if (dbInterruptions.charAt(i) == '{') {
                numBranches++;
            }
        }

        Pattern pattern = Pattern.compile("\\{employmentDateStart: (.*?), employmentDateEnd: (.*?), interruptionsExplanation: (.*?)\\}");

        Matcher matcher = pattern.matcher(dbInterruptions);

        Interruptions[] interruptions = new Interruptions[numBranches];
        int i = 0;
        while (matcher.find()) {
            String employmentDateStart = matcher.group(1);
            String employmentDateEnd = matcher.group(2);
            String interruptionsExplanation = matcher.group(3);

            interruptions[i] = new Interruptions(employmentDateStart, employmentDateEnd, interruptionsExplanation);
            i++;
        }

        return interruptions;
    }
}
