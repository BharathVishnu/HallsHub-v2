package com.hallshubbackend.hallshubbackend.halls;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/halls")
public class HallController {

    private final HallRepository hallRepo;

    public HallController(HallRepository hallRepo) {
        this.hallRepo = hallRepo;
    }

    // ADMIN ONLY
    @PostMapping
    public Hall createHall(@RequestBody Hall hall,
                           Authentication authentication) {

        String role = authentication.getAuthorities()
                .iterator()
                .next()
                .getAuthority();

        if (!role.equals("ADMIN")) {
            throw new RuntimeException("Forbidden");
        }

        return hallRepo.save(hall);
    }

    // Everyone can see halls
    @GetMapping
    public List<Hall> getAll() {
        return hallRepo.findAll();
    }
}
