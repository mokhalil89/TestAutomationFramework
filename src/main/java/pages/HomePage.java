package pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class HomePage extends PageBase {

	public HomePage(WebDriver driver) {
		super(driver);
		jse = (JavascriptExecutor) driver;
		action = new Actions(driver);
	}

	@FindBy(linkText = "Register")
	WebElement registerLink;

	@FindBy(linkText = "Log in")
	WebElement loginLink;

	@FindBy(linkText = "Contact us")
	WebElement contactUsLink;

	@FindBy(id = "customerCurrency")
	WebElement currencydrl;

	public void OpenRegistrationPage() {
		clickButton(registerLink);
	}
	
	@FindBy(linkText="Computers")
	WebElement ComputerMenu; 
	
	@FindBy(linkText="Notebooks")
	WebElement NotbooksMenu; 
	

	public void OpenLoginPage() {

		clickButton(loginLink);
	}

	public void openContactUsPage()

	{
		scrollToBottom();
		clickButton(contactUsLink);
	}

	public void ChangeCurrency() {

		select = new Select(currencydrl);
		select.selectByIndex(1);
	}
	public void selectNotebooksMenu() 
	{
		action
		.moveToElement(ComputerMenu)
		.moveToElement(NotbooksMenu)
		.click()
		.build()
		.perform();
	}
}
