package com.Blinkit.Services;



import java.util.List;

import com.Blinkit.Exception.UserException;
import com.Blinkit.Model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public List<User> findAllUsers();

}
