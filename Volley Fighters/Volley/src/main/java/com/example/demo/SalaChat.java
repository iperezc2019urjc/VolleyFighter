package com.example.demo;

import java.util.*;
import org.springframework.stereotype.*;

@Component
public class SalaChat {
List<String> mensajes = new ArrayList<String>();
	
	public SalaChat() {
		//mensajes.add("---------- CHAT ----------");
	}
	
	public List<String> getMensajes() {
		return mensajes;
	}

	

	public void setMensajes(List<String> readAllLines) {
		this.mensajes = mensajes;
	}
}
