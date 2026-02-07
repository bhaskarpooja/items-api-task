package com.example.itemsapi.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CreateItemRequest {

	//validations using jakarta.validation api
	
    @NotBlank(message = "Name is required")
    @Size(min = 1, max = 200, message = "Name must be between 1 and 200 characters")
    private String name;

    @Size(max = 2000, message = "Description must not exceed 2000 characters")
    private String description;

    @DecimalMin(value = "0.0", message = "Price must be non-negative")
    private Double price;

    @Size(max = 100, message = "Category must not exceed 100 characters")
    private String category;

    public String getName() { 
    	return name; 
    }
    public void setName(String name) {
    	this.name = name; 
    }
    public String getDescription() { 
    	return description; 
	}
    public void setDescription(String description) { 
    	this.description = description; 
	}
    public Double getPrice() { 
    	return price; 
    }
    public void setPrice(Double price) { 
    	this.price = price; 
	}
    public String getCategory() { 
    	return category; 
    }
    public void setCategory(String category) { 
    	this.category = category; 
	}
}
