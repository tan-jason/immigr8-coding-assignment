package com.immigr8.coding.assignment.immigr8CodingAssignment.model;

import jakarta.persistence.AttributeConverter;

public class StockOwnershipDetailsConverter implements AttributeConverter<StockOwnershipDetails, String> {

    @Override
    public String convertToDatabaseColumn(StockOwnershipDetails stockOwnershipDetails) {
        if (stockOwnershipDetails == null) {
            return null;
        }

        return stockOwnershipDetails.getPercentageOwnership() + "," + stockOwnershipDetails.getFederalEmployerId();
    }

    @Override
    public StockOwnershipDetails convertToEntityAttribute(String dbStockOwnershipDetails) {
        if (dbStockOwnershipDetails == null) {
            return null;
        }

        String[] stockOwnershipDetailsAttributes = dbStockOwnershipDetails.split(",");
        if (stockOwnershipDetailsAttributes.length != 2) {
            return null;
        }

        int percentageOwnership = Integer.parseInt(stockOwnershipDetailsAttributes[0]);
        int federalEmployerId = Integer.parseInt(stockOwnershipDetailsAttributes[1]);

        return new StockOwnershipDetails(percentageOwnership, federalEmployerId);
    }
}
