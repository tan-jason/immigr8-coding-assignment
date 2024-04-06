package com.immigr8.coding.assignment.immigr8CodingAssignment.model;

public class Interruptions {
    private String employmentDateStart;
    private String employmentDateEnd;
    private String interruptionExplanation;

    public Interruptions(String employmentDateStart, String employmentDateEnd, String interruptionExplanation) {
        this.employmentDateStart = employmentDateStart;
        this.employmentDateEnd = employmentDateEnd;
        this.interruptionExplanation = interruptionExplanation;
    }

    public String getEmploymentDateStart() {
        return employmentDateStart;
    }

    public void setEmploymentDateStart(String employmentDateStart) {
        this.employmentDateStart = employmentDateStart;
    }

    public String getEmploymentDateEnd() {
        return employmentDateEnd;
    }

    public void setEmploymentDateEnd(String employmentDateEnd) {
        this.employmentDateEnd = employmentDateEnd;
    }

    public String getInterruptionExplanation() {
        return interruptionExplanation;
    }

    public void setInterruptionExplanation(String interruptionExplanation) {
        this.interruptionExplanation = interruptionExplanation;
    }
}
