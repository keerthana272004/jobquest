package com.jobportal.jobquest.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobportal.jobquest.Model.*;

public interface UserRepository extends JpaRepository<UserModel, Long> {
    
}