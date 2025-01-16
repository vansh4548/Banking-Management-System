package net.javaguides.banking.controller;

import net.javaguides.banking.dto.UserDto;
import net.javaguides.banking.entity.User;
import net.javaguides.banking.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody UserDto userDto) {
        // Add logic to register the user
        userService.createUser(userDto);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody UserDto userDto) {
        // Add login logic
        if (userService.verifyCredentials(userDto)) {
            return ResponseEntity.ok("Login successful");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
}
