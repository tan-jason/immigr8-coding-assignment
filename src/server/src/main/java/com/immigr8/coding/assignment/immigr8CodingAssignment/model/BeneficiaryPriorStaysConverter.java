package com.immigr8.coding.assignment.immigr8CodingAssignment.model;

import jakarta.persistence.AttributeConverter;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class BeneficiaryPriorStaysConverter implements AttributeConverter<BeneficiaryPriorStays[], String> {

    @Override
    public String convertToDatabaseColumn(BeneficiaryPriorStays[] beneficiaryPriorStays) {
        if (beneficiaryPriorStays == null) {
            return null;
        }

        String beneficiaryPriorStaysStr = "";
        for (BeneficiaryPriorStays bps : beneficiaryPriorStays) {
            beneficiaryPriorStaysStr = beneficiaryPriorStaysStr +
                    "{" + "subjectName: " + bps.getSubjectName() + ", " +
                    "periodStart: " + bps.getPeriodStart() + ", " +
                    "periodEnd: " + bps.getPeriodEnd() + "},\n";
        }

        return beneficiaryPriorStaysStr;
    }

    @Override
    public BeneficiaryPriorStays[] convertToEntityAttribute(String dbPriorStays) {
        int numBranches = 0;
        for (int i = 0; i < dbPriorStays.length(); i++) {
            if (dbPriorStays.charAt(i) == '{') {
                numBranches++;
            }
        }

        Pattern pattern = Pattern.compile("\\{subjectName: (.*?), periodStart: (.*?), periodEnd: (.*?)\\}");

        Matcher matcher = pattern.matcher(dbPriorStays);

        BeneficiaryPriorStays[] beneficiaryPriorStays = new BeneficiaryPriorStays[numBranches];
        int i = 0;
        while (matcher.find()) {
            String subjectName = matcher.group(1);
            String periodStart = matcher.group(2);
            String periodEnd = matcher.group(3);

            beneficiaryPriorStays[i] = new BeneficiaryPriorStays(subjectName, periodStart, periodEnd);
            i++;
        }

        return beneficiaryPriorStays;
    }
}
