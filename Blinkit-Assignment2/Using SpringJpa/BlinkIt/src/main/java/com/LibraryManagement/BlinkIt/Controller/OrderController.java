package com.LibraryManagement.BlinkIt.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.LibraryManagement.BlinkIt.Services.OrderService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping("/total-sales")
    public  ResponseEntity<Double> getTotalSales() {
       Double totalSales = orderService.calculateTotalSales();
        return ResponseEntity.ok(totalSales);
    }
}