package com.example.library.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.library.entity.Reader;
public interface ReaderRepository extends JpaRepository<Reader, Long> {
}