package com.hallshubbackend.hallshubbackend.users;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/api/me")
    public String me() {
        return "You are authenticated!";
    }
}
