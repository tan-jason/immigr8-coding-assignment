package com.immigr8.coding.assignment.immigr8CodingAssignment.model;


public class BeneficiaryPriorStays {
    private String subjectName;
    private String periodStart;
    private String periodEnd;

    public BeneficiaryPriorStays(String subjectName, String periodStart, String periodEnd) {
        this.subjectName = subjectName;
        this.periodStart = periodStart;
        this.periodEnd = periodEnd;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getPeriodStart() {
        return periodStart;
    }

    public void setPeriodStart(String periodStart) {
        this.periodStart = periodStart;
    }

    public String getPeriodEnd() {
        return periodEnd;
    }

    public void setPeriodEnd(String periodEnd) {
        this.periodEnd = periodEnd;
    }
}
