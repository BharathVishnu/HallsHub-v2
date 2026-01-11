package com.hallshubbackend.hallshubbackend.booking;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.time.LocalDateTime;
import java.util.List;

public interface BookingRepository extends MongoRepository<Booking, String> {

    List<Booking> findByHallIdAndStartTimeLessThanAndEndTimeGreaterThan(
        String hallId,
        LocalDateTime end,
        LocalDateTime start
    );
}