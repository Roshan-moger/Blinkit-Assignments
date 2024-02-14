package com.LibraryManagement.BlinkIt.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String authorName;

	public Author() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Author(Long id, String authorName) {
		super();
		this.id = id;
		this.authorName = authorName;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
    
    

    // Getters and setters
}

