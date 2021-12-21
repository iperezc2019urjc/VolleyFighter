package com.example.demo;

import java.util.*;
import org.springframework.stereotype.*;

@Component
public class Chat {
	List<String> chatecillo = new ArrayList<String>();
	
	public Chat() {};
	
	public List<String> getChatecillo() {
		return chatecillo;
	}

	public void setChatecillo(List<String> chatecillo) {
		this.chatecillo = chatecillo;
	}
	
}
