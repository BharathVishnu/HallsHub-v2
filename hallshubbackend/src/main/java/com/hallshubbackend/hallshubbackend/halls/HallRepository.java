package com.hallshubbackend.hallshubbackend.halls;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface HallRepository extends MongoRepository<Hall, String> {}
