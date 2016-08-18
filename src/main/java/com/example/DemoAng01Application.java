package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Configuration
@ComponentScan
@EnableAutoConfiguration
public class DemoAng01Application {

	public static void main(String[] args) {
		SpringApplication.run(DemoAng01Application.class, args);
	}
}
@Controller
class HomeController
{
	@RequestMapping("/")
	public String home() {
		return "index.html";
	}
}