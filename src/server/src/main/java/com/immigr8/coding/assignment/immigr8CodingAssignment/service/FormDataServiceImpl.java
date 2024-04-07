package com.immigr8.coding.assignment.immigr8CodingAssignment.service;

import com.immigr8.coding.assignment.immigr8CodingAssignment.model.FormData;
import com.immigr8.coding.assignment.immigr8CodingAssignment.repository.FormDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormDataServiceImpl implements FormDataService{
    @Autowired
    private FormDataRepository formDataRepository;

    @Override
    public FormData saveFormData(FormData formData) {
        return formDataRepository.save(formData);
    }
}
