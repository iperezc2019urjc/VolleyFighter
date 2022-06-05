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
@RequestMapping("/usuarios")
public class UsernameRestController {

	@Autowired
	private Username usernames;

	@PostMapping
	public ResponseEntity<Boolean> crearHistorialUsuario() throws IOException {

		String ruta = "usuarios/usernamesHistory.txt";
		File file = new File(ruta);

		file.createNewFile();

		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}

	@GetMapping
	public List<String> getUsernames() throws IOException {
		Path path = Paths.get("usuarios/", "usernamesHistory.txt");
		usernames.setUsuarios(Files.readAllLines(path, Charset.defaultCharset()));
		return usernames.getUsuarios();
	}

	@PutMapping
	public ResponseEntity<Boolean> newUsers(@RequestBody String newUser) throws IOException {
		File archivo;
		FileWriter escribir;
		PrintWriter linea;

		archivo = new File("usuarios/usernamesHistory.txt");
		if (!archivo.exists()) {
			archivo.createNewFile();
			escribir = new FileWriter(archivo, true);
			linea = new PrintWriter(escribir);
			linea.println(newUser);
			linea.close();
			escribir.close();
		} else {
			escribir = new FileWriter(archivo, true);
			linea = new PrintWriter(escribir);
			linea.println(newUser);
			linea.close();
			escribir.close();
		}

		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}

	@DeleteMapping
	public ResponseEntity<Boolean> borrarUsers() throws IOException {

		String ruta = "usuarios/usernamesHistory.txt";
		File file = new File(ruta);

		file.delete();

		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
}
