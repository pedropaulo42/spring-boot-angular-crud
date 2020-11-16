package com.backend.be.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.be.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
