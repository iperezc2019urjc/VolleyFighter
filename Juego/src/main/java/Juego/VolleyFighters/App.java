package Juego.VolleyFighters;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;


@SpringBootApplication
@EnableWebSocket
public class App implements WebSocketConfigurer{

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(VolleyFightersHandler(), "/volleyFighters").setAllowedOrigins("*");
	}
	
	@Bean
	public WebsockeVolleyFighterstHandler VolleyFightersHandler() {
		return new WebsockeVolleyFighterstHandler();
	}
	
	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}

}
