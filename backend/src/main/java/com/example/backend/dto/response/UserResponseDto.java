package com.example.backend.dto.response;

public class UserResponseDto {
    private String jwt;

    public UserResponseDto() {
    }

    public UserResponseDto(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
}
