package com.LibraryManagement.BlinkIt.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.LibraryManagement.BlinkIt.Model.Book;
import com.LibraryManagement.BlinkIt.Services.BookService;

@RestController
@RequestMapping("/api/books")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("/top-selling")
    public ResponseEntity<List<Book>> getTopSellingBooks() {
        List<Book> topSellingBooks = bookService.getTopSellingBooks();
        return ResponseEntity.ok(topSellingBooks);
    }
}