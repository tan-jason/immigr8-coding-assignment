package com.immigr8.coding.assignment.immigr8CodingAssignment.model;

import jakarta.persistence.AttributeConverter;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StockOwnershipDetailsConverter implements AttributeConverter<StockOwnershipDetails[], String> {

    @Override
    public String convertToDatabaseColumn(StockOwnershipDetails[] stockOwnershipDetails) {
        if (stockOwnershipDetails == null) {
            return null;
        }

        String stockOwnershipDetailsStr = "";
        for (StockOwnershipDetails s : stockOwnershipDetails) {
            stockOwnershipDetailsStr = stockOwnershipDetailsStr + "{" +
                    "percentageOwnership: " + s.getPercentageOwnership() + ", " +
                    "federalEmployerId: " + s.getFederalEmployerId() + "},\n";
        }

        return stockOwnershipDetailsStr;
    }

    @Override
    public StockOwnershipDetails[] convertToEntityAttribute(String dbStockOwnershipDetails) {
        if (dbStockOwnershipDetails == null) {
            return null;
        }

        int numBranches = 0;
        for (int i = 0; i < dbStockOwnershipDetails.length(); i++) {
            if (dbStockOwnershipDetails.charAt(i) == '{') {
                numBranches++;
            }
        }

        Pattern pattern = Pattern.compile("\\{percentageOwnership: (.*?), federalEmployerId: (.*?)\\}");

        Matcher matcher = pattern.matcher(dbStockOwnershipDetails);

        StockOwnershipDetails[] stockOwnershipDetails = new StockOwnershipDetails[numBranches];
        int i = 0;
        while (matcher.find()) {
            int percentageOwnership = Integer.parseInt(matcher.group(1));
            int federalEmployerId = Integer.parseInt(matcher.group(2));

            stockOwnershipDetails[i] = new StockOwnershipDetails(percentageOwnership, federalEmployerId);
            i++;
        }

        return stockOwnershipDetails;
    }
}
