package com.immigr8.coding.assignment.immigr8CodingAssignment.model;

public class StockOwnershipDetails {
    private int percentageOwnership;
    private int federalEmployerId;

    public StockOwnershipDetails(int percentageOwnership, int federalEmployerId) {
        this.percentageOwnership = percentageOwnership;
        this.federalEmployerId = federalEmployerId;
    }

    public int getPercentageOwnership() {
        return percentageOwnership;
    }

    public void setPercentageOwnership(int percentageOwnership) {
        this.percentageOwnership = percentageOwnership;
    }

    public int getFederalEmployerId() {
        return federalEmployerId;
    }

    public void setFederalEmployerId(int federalEmployerId) {
        this.federalEmployerId = federalEmployerId;
    }
}
