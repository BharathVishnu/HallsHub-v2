package com.hallshubbackend.hallshubbackend.halls;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "halls")
public class Hall {

    @Id
    private String id;

    private String name;
    private int capacity;

    public Hall() {}   // REQUIRED

    public String getId() { return id; }
    public String getName() { return name; }
    public int getCapacity() { return capacity; }

    public void setId(String id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setCapacity(int capacity) { this.capacity = capacity; }
}

