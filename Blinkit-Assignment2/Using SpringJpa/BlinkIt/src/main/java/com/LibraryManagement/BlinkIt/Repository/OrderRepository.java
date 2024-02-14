package com.LibraryManagement.BlinkIt.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.LibraryManagement.BlinkIt.Model.Orders;

public interface OrderRepository extends JpaRepository<Orders, Long> {
	
	@Query("SELECT COALESCE(SUM(od.subtotal), 0.0) FROM OrderDetails od")
    Double calculateTotalSales();

}
