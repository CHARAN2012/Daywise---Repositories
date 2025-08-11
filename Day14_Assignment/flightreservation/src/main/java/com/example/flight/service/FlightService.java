package com.example.flight.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.flight.entity.Flight;
import com.example.flight.repository.FlightRepository;

@Service
public class FlightService {

	@Autowired
	private FlightRepository flightRepository;
	
	public FlightService(FlightRepository flightRepository) {
        this.flightRepository = flightRepository;
    }
	
	public Flight addFlight(Flight flight) {
        if (flightRepository.existsByFlightNumber(flight.getFlightNumber())) {
            throw new RuntimeException("Flight number already exists");
        }
        return flightRepository.save(flight);
    }
	
	
	
	public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }
	
	
	
	public Flight getFlightById(Long id) {
		return flightRepository.findById(id)
				.orElseThrow(()-> new RuntimeException("Flight not found with id: " + id));
	}
	
	
	
	public String deleteFlight(Long id) {
		if(!flightRepository.existsById(id)) {
			throw new RuntimeException("Flight not found with id: " + id);
		}
		flightRepository.deleteById(id);
		return "Flight id: "+id+ " Deleted Successfully";
	}
}