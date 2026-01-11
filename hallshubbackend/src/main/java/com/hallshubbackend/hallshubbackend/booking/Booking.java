package com.hallshubbackend.hallshubbackend.booking;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "bookings")
public class Booking {

    @Id
    private String id;

    private String hallId;
    private String eventId;
    private String bookedBy;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
    private LocalDateTime startTime;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
    private LocalDateTime endTime;

    public Booking() {}

    public String getId() { return id; }
    public String getHallId() { return hallId; }
    public String getEventId() { return eventId; }
    public String getBookedBy() { return bookedBy; }
    public LocalDateTime getStartTime() { return startTime; }
    public LocalDateTime getEndTime() { return endTime; }

    public void setId(String id) { this.id = id; }
    public void setHallId(String hallId) { this.hallId = hallId; }
    public void setEventId(String eventId) { this.eventId = eventId; }
    public void setBookedBy(String bookedBy) { this.bookedBy = bookedBy; }
    public void setStartTime(LocalDateTime startTime) { this.startTime = startTime; }
    public void setEndTime(LocalDateTime endTime) { this.endTime = endTime; }
}
