package Juego.VolleyFighters;

import java.util.*;
import org.springframework.stereotype.*;

@Component
public class Username {
	List<String> usuarios = new ArrayList<String>();

	public Username() {
	}

	public List<String> getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(List<String> usuarios) {
		this.usuarios = usuarios;
	}
}
