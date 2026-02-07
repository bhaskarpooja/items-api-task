package com.example.itemsapi.service;

import com.example.itemsapi.dto.CreateItemRequest;
import com.example.itemsapi.model.Item;
import com.example.itemsapi.repository.ItemRepository;
import org.springframework.stereotype.Service;

@Service
public class ItemService {

    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public Item createItem(CreateItemRequest request) {
        Item item = new Item(
                null,
                request.getName(),
                request.getDescription() != null ? request.getDescription() : "",
                request.getPrice() != null ? request.getPrice() : 0.0,
                request.getCategory() != null ? request.getCategory() : ""
        );
        return itemRepository.save(item);
    }

    public Item getItemById(Long id) {
        return itemRepository.findById(id).orElse(null);
    }
}
