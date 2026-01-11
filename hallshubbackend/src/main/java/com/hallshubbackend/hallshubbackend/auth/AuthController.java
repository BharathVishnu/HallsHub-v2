package com.hallshubbackend.hallshubbackend.auth;

import com.hallshubbackend.hallshubbackend.security.JwtUtil;
import com.hallshubbackend.hallshubbackend.users.User;
import com.hallshubbackend.hallshubbackend.users.UserRepository;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepo;
    private final BCryptPasswordEncoder encoder;
    private final JwtUtil jwtUtil;

public AuthController(UserRepository userRepo, BCryptPasswordEncoder encoder, JwtUtil jwtUtil) {
    this.userRepo = userRepo;
    this.encoder = encoder;
    this.jwtUtil = jwtUtil;
}


    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest req) {

        if (userRepo.findByUsername(req.username).isPresent()) {
            throw new RuntimeException("User already exists");
        }

        User user = new User();
        user.setUsername(req.username);
        user.setPassword(encoder.encode(req.password));
        user.setClub(req.club);
        user.setRole("USER");

        userRepo.save(user);
        return "User registered";
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest req) {
        User user = userRepo.findByUsername(req.username)
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        if (!encoder.matches(req.password, user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtUtil.generateToken(user.getUsername(), user.getRole());
        return token;

    }
@PostMapping("/promote/{username}")
public String promote(@PathVariable String username,
                      org.springframework.security.core.Authentication authentication) {

    System.out.println("AUTH NAME: " + authentication.getName());
    authentication.getAuthorities().forEach(a -> {
        System.out.println("ROLE: " + a.getAuthority());
    });

    String role = authentication.getAuthorities().iterator().next().getAuthority();

    if (!role.equals("ADMIN")) {
        throw new RuntimeException("Forbidden");
    }

    User user = userRepo.findByUsername(username).orElseThrow();
    user.setRole("ADMIN");
    userRepo.save(user);

    return username + " is now ADMIN";
}


}
