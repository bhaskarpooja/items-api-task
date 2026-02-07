package com.example.itemsapi.model;

import java.time.Instant;

public class Item {

	//properties
    private Long id;
    private String name;
    private String description;
    private Double price;
    private String category;
    private final Instant createdAt;

    public Item(Long id, String name, String description, Double price, String category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.createdAt = Instant.now();
    }

    
    //getters to access data
    public Long getId() { 
    	return id; 
	}
    public void setId(Long id) { 
    	this.id = id; 
	}
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
    public Instant getCreatedAt() { 
    	return createdAt; 
	}
}
