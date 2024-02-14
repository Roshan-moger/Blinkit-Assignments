package com.LibraryManagement.BlinkIt.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.LibraryManagement.BlinkIt.Model.OrderDetails;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {

}
