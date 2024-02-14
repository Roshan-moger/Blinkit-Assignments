package com.Blinkit.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Blinkit.Model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);

	List<User> findAllByOrderByCreatedAtDesc();
	

}
