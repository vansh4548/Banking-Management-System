// src/main/java/net/javaguides/banking/service/UserService.java
package net.javaguides.banking.service;

import net.javaguides.banking.dto.UserDto;
import net.javaguides.banking.entity.User;
import net.javaguides.banking.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void createUser(UserDto userDto) {
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword()); // Consider hashing passwords in production
        userRepository.save(user);
    }

    public boolean verifyCredentials(UserDto userDto) {
        Optional<User> user = userRepository.findByUsername(userDto.getUsername());
        if (user.isPresent()) {
            // Ensure password comparison logic matches how passwords are stored
            return user.get().getPassword().equals(userDto.getPassword());
        }
        return false;
    }
}
