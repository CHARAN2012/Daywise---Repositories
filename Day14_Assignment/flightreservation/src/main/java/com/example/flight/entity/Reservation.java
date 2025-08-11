package com.example.flight.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="`reservation`")
public class Reservation {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
	@Column(nullable=false)
	private String passengerName;
	
	@Column(nullable=false)
    private String passengerEmail;
	
	@Column(nullable=false)
    private int seatsBooked;
	
	@Column(nullable=false)
    private LocalDateTime reservedAt;
    
    @ManyToOne
    @JoinColumn(name = "flight_id") 
    private Flight flight;
    
    public Reservation() {
		// TODO Auto-generated constructor stub
	}
    
    public Reservation(Long id, String passengerName, String passengerEmail, int seatsBooked,
			LocalDateTime reservedAt, Flight flight) {
		this.id = id;
		this.passengerName = passengerName;
		this.passengerEmail = passengerEmail;
		this.seatsBooked = seatsBooked;
		this.reservedAt = reservedAt;
		this.flight=flight;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPassengerName() {
		return passengerName;
	}

	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}

	public String getPassengerEmail() {
		return passengerEmail;
	}

	public void setPassengerEmail(String passengerEmail) {
		this.passengerEmail = passengerEmail;
	}

	public int getSeatsBooked() {
		return seatsBooked;
	}

	public void setSeatsBooked(int seatsBooked) {
		this.seatsBooked = seatsBooked;
	}

	public LocalDateTime getReservedAt() {
		return reservedAt;
	}

	public void setReservedAt(LocalDateTime reservedAt) {
		this.reservedAt = reservedAt;
	}

	public Flight getFlight() {
		return flight;
	}

	public void setFlight(Flight flight) {
		this.flight = flight;
	}
    
    
}