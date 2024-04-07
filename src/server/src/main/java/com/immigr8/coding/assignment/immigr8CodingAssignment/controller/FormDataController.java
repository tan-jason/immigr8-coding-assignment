package com.immigr8.coding.assignment.immigr8CodingAssignment.controller;

import com.immigr8.coding.assignment.immigr8CodingAssignment.model.FormData;
import com.immigr8.coding.assignment.immigr8CodingAssignment.service.FormDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/additional-fees")
public class FormDataController {
    @Autowired
    private FormDataService formDataService;

    @PostMapping("/")
    public String add (@RequestBody FormData formData) {
        formDataService.saveFormData(formData);
        return "form data saved";
    }
}
