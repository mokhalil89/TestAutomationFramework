package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EmailToFriendPage extends PageBase {

	public EmailToFriendPage(WebDriver driver) {
		super(driver);
	}

	@FindBy(id = "FriendEmail")
	private WebElement emailFriendTxt;

	@FindBy(id = "PersonalMessage")
	private WebElement personalMessageTxt;

	@FindBy(name = "send-email")
	private WebElement sendEmailBtn;

	@FindBy(css = "div.result")
	public WebElement messageNotification;

	public void SendEmailToFriend(String friendEmail, String personalMessage) {
		setText(emailFriendTxt, friendEmail);
		setText(personalMessageTxt, personalMessage);
		clickButton(sendEmailBtn);
	}

}