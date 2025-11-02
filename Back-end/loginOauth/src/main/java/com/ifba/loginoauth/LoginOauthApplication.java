package com.ifba.loginoauth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
public class LoginOauthApplication {

    public static void main(String[] args) {
        SpringApplication.run(LoginOauthApplication.class, args);
    }

}
