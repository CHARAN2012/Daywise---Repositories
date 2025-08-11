package com.example.restaurant.controller;


import com.example.restaurant.entity.MenuItem;
import com.example.restaurant.entity.Restaurant;
import com.example.restaurant.service.MenuItemService;
import com.example.restaurant.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurants")
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private MenuItemService menuItemService;

    // --- Restaurant Endpoints ---

    @PostMapping
    public ResponseEntity<Restaurant> addRestaurant(@RequestBody Restaurant restaurant) {
        return ResponseEntity.ok(restaurantService.addRestaurant(restaurant));
    }

    @GetMapping
    public List<Restaurant> getAllRestaurants() {
        return restaurantService.getAllRestaurants();
    }

    @GetMapping("/{id}")
    public Restaurant getRestaurantById(@PathVariable Long id) {
        return restaurantService.getRestaurantById(id);
    }

    @PutMapping("/{id}")
    public Restaurant updateRestaurant(@PathVariable Long id, @RequestBody Restaurant restaurant) {
        return restaurantService.updateRestaurant(id, restaurant);
    }

    @DeleteMapping("/{id}")
    public void deleteRestaurant(@PathVariable Long id) {
        restaurantService.deleteRestaurant(id);
    }

    // --- Menu Item Endpoints ---

    @PostMapping("/{id}/menu-items")
    public ResponseEntity<MenuItem> addMenuItem(@PathVariable Long id, @RequestBody MenuItem menuItem) {
        return ResponseEntity.ok(menuItemService.addMenuItem(id, menuItem));
    }

    @GetMapping("/{id}/menu-items")
    public List<MenuItem> getMenuItems(@PathVariable Long id) {
        return menuItemService.getMenuItemsByRestaurant(id);
    }

    @PutMapping("/menu-items/{menuItemId}")
    public MenuItem updateMenuItem(@PathVariable Long menuItemId, @RequestBody MenuItem menuItem) {
        return menuItemService.updateMenuItem(menuItemId, menuItem);
    }

    @DeleteMapping("/menu-items/{menuItemId}")
    public void deleteMenuItem(@PathVariable Long menuItemId) {
        menuItemService.deleteMenuItem(menuItemId);
    }
}