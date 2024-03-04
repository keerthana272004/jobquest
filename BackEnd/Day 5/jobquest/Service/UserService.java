package com.jobportal.jobquest.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jobportal.jobquest.Model.*;
import com.jobportal.jobquest.Repository.*;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<UserModel> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public UserModel saveLogin(UserModel login) {
        login.setPassword(passwordEncoder.encode(login.getPassword()));
        return userRepository.save(login);
    }
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}