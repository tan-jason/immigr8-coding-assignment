package com.immigr8.coding.assignment.immigr8CodingAssignment.repository;

import com.immigr8.coding.assignment.immigr8CodingAssignment.model.IndividualPetition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IndividualPetitionRepository extends JpaRepository<IndividualPetition, Integer> {
}
