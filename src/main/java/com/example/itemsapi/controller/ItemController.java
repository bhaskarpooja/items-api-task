package com.example.itemsapi.controller;

import com.example.itemsapi.dto.CreateItemRequest;
import com.example.itemsapi.model.Item;
import com.example.itemsapi.service.ItemService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    //api endpoint to add a new item
    @PostMapping
    public ResponseEntity<Item> addItem(@Valid @RequestBody CreateItemRequest request) {
        Item created = itemService.createItem(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    //api endpoint to get a single item using id
    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable Long id) {
        Item item = itemService.getItemById(id);
        if (item == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(item);
    }

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
