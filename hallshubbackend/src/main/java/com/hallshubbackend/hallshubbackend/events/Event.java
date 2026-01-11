package com.hallshubbackend.hallshubbackend.events;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "events")
public class Event {

    @Id
    private String id;

    private String name;
    private String category;
    private String createdBy; // userId

    // getters & setters
}
