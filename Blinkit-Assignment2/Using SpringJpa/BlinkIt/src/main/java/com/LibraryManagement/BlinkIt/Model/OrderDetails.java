package com.LibraryManagement.BlinkIt.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class OrderDetails {
	
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @ManyToOne
	    @JoinColumn(name = "order_id")
	    private Orders order;

	    @ManyToOne
	    @JoinColumn(name = "book_id")
	    private Book book;

	    private int quantity;
	    private double subtotal;
		public OrderDetails() {
			super();
			// TODO Auto-generated constructor stub
		}
		public OrderDetails(Long id, Orders order, Book book, int quantity, double subtotal) {
			super();
			this.id = id;
			this.order = order;
			this.book = book;
			this.quantity = quantity;
			this.subtotal = subtotal;
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public Orders getOrder() {
			return order;
		}
		public void setOrder(Orders order) {
			this.order = order;
		}
		public Book getBook() {
			return book;
		}
		public void setBook(Book book) {
			this.book = book;
		}
		public int getQuantity() {
			return quantity;
		}
		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}
		public double getSubtotal() {
			return subtotal;
		}
		public void setSubtotal(double subtotal) {
			this.subtotal = subtotal;
		}
	    
	    

}
