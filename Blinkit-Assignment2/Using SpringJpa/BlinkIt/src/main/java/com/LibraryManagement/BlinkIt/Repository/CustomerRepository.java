package com.LibraryManagement.BlinkIt.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.LibraryManagement.BlinkIt.Model.Customer;

public interface CustomerRepository  extends JpaRepository<Customer, Long>{

}
