package com.immigr8.coding.assignment.immigr8CodingAssignment.model;

import jakarta.persistence.AttributeConverter;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ForeignBranchesConverter implements AttributeConverter<ForeignBranches[], String> {
    @Override
    public String convertToDatabaseColumn(ForeignBranches[] foreignBranches) {
        if (foreignBranches == null) {
            return null;
        }
        String foreignBranchesStr = "";

        for (ForeignBranches f : foreignBranches) {
            foreignBranchesStr = foreignBranchesStr +
                    "{" + "nameAndAddress: " + f.getNameAndAddress() +
            ", relationship: " + f.getRelationship() + "},\n";
        }

        return foreignBranchesStr;
    }

    @Override
    public ForeignBranches[] convertToEntityAttribute(String dbForeignBranches) {
        if (dbForeignBranches == null) {
            return null;
        }

        int numBranches = 0;
        for (int i = 0; i < dbForeignBranches.length(); i++) {
            if (dbForeignBranches.charAt(i) == '{') {
                numBranches++;
            }
        }

        Pattern pattern = Pattern.compile("\\{nameAndAddress: (.*?), relationship: (.*?)\\}");

        Matcher matcher = pattern.matcher(dbForeignBranches);

        ForeignBranches[] foreignBranches = new ForeignBranches[numBranches];
        int i = 0;
        while (matcher.find()) {
            String nameAndAddress = matcher.group(1);
            String relationship = matcher.group(2);

            foreignBranches[i] = new ForeignBranches(nameAndAddress, relationship);
            i++;
        }

        return foreignBranches;
    }
}
