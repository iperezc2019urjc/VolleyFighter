package com.example.demo;

import java.util.*;
import java.io.*;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/SalaParaChat")
public class SalaChatRestController {

	@Autowired
	private SalaChat SalaChat;
	
	@PostMapping
	public ResponseEntity<Boolean> crearChat(@RequestBody String startMessage) {
		
		try {
			String direccion = "SalaParaChat/chatRegister.txt";
		    File registro = new File(direccion);
			
		    registro.createNewFile();
            
            FileWriter fileWriter = new FileWriter(registro);
            BufferedWriter BufferedWriter = new BufferedWriter(fileWriter);
            
            BufferedWriter.write(startMessage + "\n");
            BufferedWriter.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
		
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
	
	@GetMapping
	public List<String> getChat() {
		try {
            Path ruta = Paths.get("SalaParaChat/", "chatRegister.txt");
            SalaChat.setMensajes(Files.readAllLines(ruta, Charset.defaultCharset()));
        } catch (Exception exp) {
            exp.printStackTrace();
        }
		
		return SalaChat.getMensajes();
	}
	
	@PutMapping
	public ResponseEntity<Boolean> newMenssage(@RequestBody String newMessage) {
		File registro;
		FileWriter fileWriter;
		PrintWriter printWriter;

		registro = new File("SalaParaChat/chatRegister.txt");
		if(!registro.exists()){
			try{
				registro.createNewFile();
				fileWriter = new FileWriter (registro,true);
				printWriter= new PrintWriter(fileWriter);
				printWriter.println(newMessage);
				printWriter.close();
				fileWriter.close();
			}catch (IOException exp){
				exp.printStackTrace();
			}


		}else {
			try{
				fileWriter = new FileWriter (registro,true);
				printWriter= new PrintWriter(fileWriter);
				printWriter.println(newMessage);
				printWriter.close();
			    fileWriter.close();
			}catch (IOException exp){
			    exp.printStackTrace();
			}
		}
		
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
	
	@DeleteMapping
	public ResponseEntity<Boolean> borrarChat() {
		try {
            String direccion = "SalaParaChat/chatRegister.txt";
            File registro = new File(direccion);
            
            registro.delete();
        } catch (Exception exp) {
            exp.printStackTrace();
        }
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
}
