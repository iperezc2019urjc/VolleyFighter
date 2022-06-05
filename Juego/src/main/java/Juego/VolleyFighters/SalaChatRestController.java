package Juego.VolleyFighters;

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
@RequestMapping("/chat")
public class SalaChatRestController {

	@Autowired
	private SalaChat chat;

	@PostMapping
	public ResponseEntity<Boolean> crearChat(@RequestBody String startMessage) throws IOException {
		String ruta = "chat/registroChat.txt";
		File file = new File(ruta);

		file.createNewFile();

		FileWriter fw = new FileWriter(file);
		BufferedWriter bw = new BufferedWriter(fw);

		bw.write(startMessage + "\n");
		bw.close();

		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}

	@GetMapping
	public List<String> getChat() {
		try {
			Path path = Paths.get("chat/", "registroChat.txt");
			chat.setMensajes(Files.readAllLines(path, Charset.defaultCharset()));
		} catch (Exception e) {
			e.printStackTrace();
		}

		return chat.getMensajes();
	}

	@PutMapping
	public ResponseEntity<Boolean> newMenssage(@RequestBody String newMessage) {
		File archivo;
		FileWriter escribir;
		PrintWriter linea;

		archivo = new File("chat/registroChat.txt");
		if (!archivo.exists()) {
			try {
				archivo.createNewFile();
				escribir = new FileWriter(archivo, true);
				linea = new PrintWriter(escribir);
				linea.println(newMessage);
				linea.close();
				escribir.close();
			} catch (IOException e) {
				e.printStackTrace();
			}

		} else {
			try {
				escribir = new FileWriter(archivo, true);
				linea = new PrintWriter(escribir);
				linea.println(newMessage);
				linea.close();
				escribir.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
}
