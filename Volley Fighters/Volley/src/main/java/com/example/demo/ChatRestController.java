package com.example.demo;


import java.util.*;
import java.io.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Chat")
public class ChatRestController {
	
	@Autowired
	private Chat chatecillo;
	
	@PutMapping
	public ResponseEntity<Boolean> newMenssage(@RequestBody String newMessage) {
        
		 List<String> mensajes = chatecillo.getChatecillo();
	        mensajes.add(newMessage);
	        chatecillo.setChatecillo(mensajes);
	        
		 return new ResponseEntity<>(true, HttpStatus.CREATED);
    }
	
	
	@GetMapping
	public List<String> getChat() {
	    
	    return chatecillo.getChatecillo();
	}
	
	
	@DeleteMapping
	public ResponseEntity<Boolean> borrarChat() {
		
		List<String> arrayVacio = new ArrayList<String>();
		chatecillo.setChatecillo(arrayVacio);
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
}
