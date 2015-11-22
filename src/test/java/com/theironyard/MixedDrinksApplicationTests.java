package com.theironyard;

import com.theironyard.services.DrinkRepository;
import com.theironyard.services.FavoriteRepository;
import com.theironyard.services.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.junit.Assert.assertTrue;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = MixedDrinksApplication.class)
@WebAppConfiguration
public class MixedDrinksApplicationTests {
	@Autowired
	DrinkRepository drinks;

	@Autowired
	FavoriteRepository favorites;

	@Autowired
	UserRepository users;

	@Autowired
	WebApplicationContext wap;

	MockMvc mockMvc;

	@Before
	public void before() {
		favorites.deleteAll();
		drinks.deleteAll();
		users.deleteAll();
		mockMvc = MockMvcBuilders.webAppContextSetup(wap).build();
	}

	@Test
	public void registerUser() throws Exception {
		mockMvc.perform(
				MockMvcRequestBuilders.post("/register-user")
				.param("username", "testUser")
				.param("password", "testPass")
				.param("image", "Test user image")
		);
		assertTrue(users.count() == 1);
	}
}
