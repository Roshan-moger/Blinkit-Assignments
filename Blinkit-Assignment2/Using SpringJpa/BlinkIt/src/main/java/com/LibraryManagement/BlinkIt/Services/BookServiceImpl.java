package com.LibraryManagement.BlinkIt.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LibraryManagement.BlinkIt.Model.Book;
import com.LibraryManagement.BlinkIt.Repository.BookRepository;

@Service
public class BookServiceImpl  implements BookService{

	 @Autowired
	    private BookRepository bookRepository;

	    public List<Book> getTopSellingBooks() {
	        return bookRepository.findTopSellingBooks();
	    }

}
