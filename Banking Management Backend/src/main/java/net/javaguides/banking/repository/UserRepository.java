// src/main/java/net/javaguides/banking/repository/UserRepository.java
package net.javaguides.banking.repository;

import net.javaguides.banking.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
