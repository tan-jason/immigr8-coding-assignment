package com.immigr8.coding.assignment.immigr8CodingAssignment.model;

public class ForeignBranches {
    private String nameAndAddress;
    private String relationship;

    public String getNameAndAddress() {
        return nameAndAddress;
    }

    public void setNameAndAddress(String nameAndAddress) {
        this.nameAndAddress = nameAndAddress;
    }

    public String getRelationship() {
        return relationship;
    }

    public void setRelationship(String relationship) {
        this.relationship = relationship;
    }

    public ForeignBranches(String nameAndAddress, String relationship) {
        this.nameAndAddress = nameAndAddress;
        this.relationship = relationship;
    }
}
