package tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import pages.HomePage;
import pages.LoginPage;
import pages.userRegistrationPage;

public class UserRegistrationTest extends TestBase {

	HomePage homeObject;
	userRegistrationPage userRegisterObject;
	LoginPage loginObject;

	@Test(priority = 1, alwaysRun = true)
	public void userRegisterSuccessfully() {
		homeObject = new HomePage(driver);
		homeObject.OpenRegistrationPage();
		userRegisterObject = new userRegistrationPage(driver);
		userRegisterObject.userRegistration("Mohamed", "Khalil", "am5347@gmail.com", "12345678");
		
		Assert.assertTrue(userRegisterObject.successMessage.getText().contains("Your registration completed"));

	}

	@Test(dependsOnMethods = { "RegisteredUserCanLogOut" })
	public void RegisteredUserCanLogin() {

		homeObject.OpenLoginPage();
		loginObject = new LoginPage(driver);
		loginObject.UserLogin("am5347@gmail.com", "12345678");
		Assert.assertTrue(userRegisterObject.LogoutLink.getText().contains("Log out"));
	}

	@Test(dependsOnMethods = { "userRegisterSuccessfully" })
	public void RegisteredUserCanLogOut() {
		userRegisterObject.userLogOut();

	}

}
