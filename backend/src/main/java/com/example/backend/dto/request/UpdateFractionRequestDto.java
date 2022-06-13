package com.example.backend.dto.request;

import com.example.backend.models.FractionEnum;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class UpdateFractionRequestDto {
        @Enumerated(EnumType.STRING)
        public FractionEnum fraction;
}
