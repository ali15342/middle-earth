package com.example.backend.security;

import java.util.Collection;
import java.util.Collections;
import java.util.Objects;

import com.example.backend.models.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * Wrapper for user details
 */

public class SpringUserDetails implements UserDetails {

    private static final long serialVersionUID = 1L;
    private Long id;
    private String username;
    private String email;
    //private Collection<? extends GrantedAuthority> authorities;

    @JsonIgnore
    private String password;

    public SpringUserDetails(Long id, String username, String password,
                             Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.username = username;
        this.password = password;
        //this.authorities = authorities;
    }

    public static SpringUserDetails build(User userAccount) {
        //GrantedAuthority authorities = new SimpleGrantedAuthority(userAccount.getRole().toString());
        //Collections.singleton(authorities) übergeben
        return new SpringUserDetails(userAccount.getId(), userAccount.getUsername(), userAccount.getHash(), null);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

   @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null; //return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        SpringUserDetails user = (SpringUserDetails) o;
        return Objects.equals(id, user.id);
    }
}
