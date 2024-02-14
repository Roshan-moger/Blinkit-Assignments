package com.LibraryManagement.BlinkIt.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.LibraryManagement.BlinkIt.Model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
	
	@Query("SELECT b FROM Book b JOIN b.orderDetails od GROUP BY b.id ORDER BY SUM(od.quantity) DESC")
    List<Book> findTopSellingBooks();

}
