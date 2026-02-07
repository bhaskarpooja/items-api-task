package com.example.itemsapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return """
            Items API is live!  

            To add an item: POST JSON to /api/items  
            Example JSON: { "name": "Sample", "description": "Sample description" }  

            To access an item: GET /api/items/{id}  
            Replace {id} with the item ID returned from POST
            """;
    }
}
