package Juego.VolleyFighters;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebsockeVolleyFighterstHandler extends TextWebSocketHandler{

	private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
	private ObjectMapper mapper = new ObjectMapper();
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("Nuevo jugador. ID: " + session.getId());
		
		ObjectNode host = mapper.createObjectNode();
		host.put("EsHost", "0");
		
		if(sessions.isEmpty()) {
			sessions.put(session.getId(), session);
            host.put("EsHost", "1");
		}else { 
			sessions.put(session.getId(), session); 
		}
		
		session.sendMessage(new TextMessage(host.toString()));
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("Sesión cerrada. ID: " + session.getId());
		sessions.remove(session.getId());
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		JsonNode node = mapper.readTree(message.getPayload());
		
		enviarInfo(session, node);
	}
	
	private void enviarInfo(WebSocketSession session, JsonNode node) throws IOException {
		ObjectNode newNode = mapper.createObjectNode();

        // Posicion jugador
        newNode.put("x", node.get("x").asDouble());
        newNode.put("y", node.get("y").asDouble());
        
       // Animacion del jugador
        newNode.put("animacionJugadores", node.get("animacionJugadores").asText());
        
        //Tiempo de juego
        newNode.put("tiempo", node.get("tiempo").asDouble());
        
     // Posicion de la pelota
        newNode.put("PelotaX", node.get("PelotaX").asDouble());
        newNode.put("PelotaY", node.get("PelotaY").asDouble());
        
        // Puntos de jugadores
        newNode.put("PuntosJ1", node.get("PuntosJ1").asDouble());
        newNode.put("PuntosJ2", node.get("PuntosJ2").asDouble());
        
     // Habilidades especiales
        newNode.put("HabilidadIrene", node.get("HabilidadIrene").asBoolean());
        newNode.put("HabilidadFernando", node.get("HabilidadFernando").asBoolean());
      /* newNode.put("HabilidadIreneVisible", node.get("HabilidadIreneVisible").asBoolean());
        newNode.put("HabilidadFernandoVisible", node.get("HabilidadFernandoVisible").asBoolean());*/
                   
        // Mandamos la informacion al resto de jugadores
		for(WebSocketSession participant : sessions.values()) {
			if(!participant.getId().equals(session.getId())) {
				participant.sendMessage(new TextMessage(newNode.toString()));
			}
		}
	}
}
