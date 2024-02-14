package com.LibraryManagement.BlinkIt.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.LibraryManagement.BlinkIt.Model.Author;

public interface AuthorRepository  extends JpaRepository<Author, Long>{

}
