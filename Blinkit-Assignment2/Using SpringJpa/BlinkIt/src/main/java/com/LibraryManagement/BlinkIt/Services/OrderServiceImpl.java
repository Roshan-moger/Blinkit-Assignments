package com.LibraryManagement.BlinkIt.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LibraryManagement.BlinkIt.Repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService {

	 @Autowired
	    private OrderRepository orderRepository;

	    public double calculateTotalSales() {
	        return orderRepository.calculateTotalSales();

}
}
