package com.example.backend.services;

import com.example.backend.dto.request.LoginRequestDto;
import com.example.backend.dto.response.LoginResponseDto;
import com.example.backend.models.User;
import com.example.backend.repositories.UserRepository;
import com.example.backend.security.BCryptPasswordHelper;
import com.example.backend.security.JwtService;
import com.github.dozermapper.core.Mapper;
import com.example.backend.dto.request.RegistrationRequestDto;
import com.example.backend.dto.response.RegistrationResponseDto;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import java.util.UUID;


/**
 * User relevant business logic for the user entity
 */

@Service
public class UserService {
    private final UserRepository userRepository;
    private final Mapper mapper;
    private final BCryptPasswordHelper bCryptPasswordHelper;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public UserService(UserRepository userRepository, Mapper mapper, BCryptPasswordHelper bCryptPasswordHelper, AuthenticationManager authenticationManager, JwtService jwtService){
        this.userRepository = userRepository;
        this.mapper = mapper;
        this.bCryptPasswordHelper = bCryptPasswordHelper;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    public RegistrationResponseDto registerUser(RegistrationRequestDto registrationRequest) {
        boolean userExists = userRepository.existsByUsernameOrEmail(registrationRequest.getUsername(), registrationRequest.getEmail());

        if (userExists) {
            return null;
        }

        String randomSalt = UUID.randomUUID().toString();
        String hashedPassword = bCryptPasswordHelper.getSHA512SecurePassword(registrationRequest.getPassword(), randomSalt);

        User dbUser = new User();
        mapper.map(registrationRequest, dbUser);

        dbUser.setHash(hashedPassword);
        dbUser.setSalt(randomSalt);

        userRepository.save(dbUser);

        RegistrationResponseDto registrationResponse = new RegistrationResponseDto();
        mapper.map(dbUser, registrationResponse);

        return registrationResponse;
    }

    public LoginResponseDto authenticateUser(LoginRequestDto loginRequestDto) {
        User dbUser = userRepository.getUserByUsername(loginRequestDto.getUsername());

        if (dbUser == null) {
            return null;
        }

        String hashedPassword = bCryptPasswordHelper.getSHA512SecurePassword(loginRequestDto.getPassword(), dbUser.getSalt());

        if (!hashedPassword.equals(dbUser.getHash())) {
            return null;
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequestDto.getUsername(), loginRequestDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = this.jwtService.generateJwtToken(authentication);

        return new LoginResponseDto(jwt);
    }
}
