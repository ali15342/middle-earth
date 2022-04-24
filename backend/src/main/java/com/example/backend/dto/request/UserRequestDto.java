package com.example.backend.dto.request;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;

/**
 * This is the data transfer object for updating the user credentials
 * It contains the model validation and the data from the frontend
 */

public class UserRequestDto {

    @Length(min = 6, max = 50)
    private String username;

    @Email
    @Length(min = 10, max = 50)
    private String email;

    @Length(min = 8, max = 50)
    private String password;

    public UserRequestDto(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}