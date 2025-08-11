package com.example.flight.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.flight.entity.Flight;
import com.example.flight.entity.Reservation;
import com.example.flight.repository.FlightRepository;
import com.example.flight.repository.ReservationRepository;

import jakarta.transaction.Transactional;

@Service
public class ReservationService {

	@Autowired
	private ReservationRepository reservationRepository;

	@Autowired
	private  FlightRepository flightRepository;

	public ReservationService(ReservationRepository reservationRepository, 
			FlightRepository flightRepository) {
		this.reservationRepository = reservationRepository;
		this.flightRepository = flightRepository;
	}


	@Transactional
	public Reservation makeReservation(Long flightId, String passengerName, 
			String passengerEmail, int seats) {
		Flight flight = flightRepository.findById(flightId)
				.orElseThrow(() -> new RuntimeException("Flight not found"));

		if (seats <= 0) {
			throw new RuntimeException("Seats must be positive");
		}

		if (flight.getSeatsAvailable() < seats) {
			throw new RuntimeException("Not enough seats available");
		}

		flight.setSeatsAvailable(flight.getSeatsAvailable() - seats);
		flightRepository.save(flight);

		Reservation reservation = new Reservation();
		reservation.setPassengerName(passengerName);
		reservation.setPassengerEmail(passengerEmail);
		reservation.setSeatsBooked(seats);
		reservation.setReservedAt(LocalDateTime.now());
		reservation.setFlight(flight);

		return reservationRepository.save(reservation);
	}
	
	
	
	
	 @Transactional
	    public String cancelReservation(Long reservationId) {
	        Reservation reservation = reservationRepository.findById(reservationId)
	                .orElseThrow(() -> new RuntimeException("Reservation not found"));

	        Flight flight = reservation.getFlight();
	        flight.setSeatsAvailable(flight.getSeatsAvailable() + reservation.getSeatsBooked());
	        flightRepository.save(flight);

	        reservationRepository.delete(reservation);
	        
	        return "Flight with Reservation Id: "+reservationId+" Cancelled Successfully";
	    }
	

}