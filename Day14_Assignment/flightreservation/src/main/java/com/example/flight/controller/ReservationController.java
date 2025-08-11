package com.example.flight.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.flight.entity.Reservation;
import com.example.flight.service.ReservationService;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

	@Autowired
	private  ReservationService reservationService;

	@PostMapping
	public ResponseEntity<Reservation> createReservation(
			@RequestParam Long flightId,
			@RequestParam String passengerName,
			@RequestParam String passengerEmail,
			@RequestParam int seats) {
		return ResponseEntity.ok(
				reservationService.makeReservation(flightId, passengerName, passengerEmail, seats)
				);
	}
	
	
	@DeleteMapping("/{id}")
    public ResponseEntity<Void> cancelReservation(@PathVariable Long id) {
        reservationService.cancelReservation(id);
        return ResponseEntity.noContent().build();
    }
	
}