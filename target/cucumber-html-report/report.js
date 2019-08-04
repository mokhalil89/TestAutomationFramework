$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/UserRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "User Registration",
  "description": "I want to check that the user can register in our e-commerce website.",
  "id": "user-registration",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User Registration",
  "description": "",
  "id": "user-registration;user-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the user in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I entered the user data",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the registration page displayed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRegistration.the_user_in_the_home_page()"
});
formatter.result({
  "duration": 5782303840,
  "status": "passed"
});
formatter.match({
  "location": "UserRegistration.i_click_on_register_link()"
});
formatter.result({
  "duration": 8225977,
  "status": "passed"
});
formatter.match({
  "location": "UserRegistration.i_entered_the_user_data()"
});
formatter.result({
  "duration": 1230837108,
  "status": "passed"
});
formatter.match({
  "location": "UserRegistration.the_registration_page_displayed_successfully()"
});
formatter.result({
  "duration": 120294533874,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Log out\"}\n  (Session info: chrome\u003d75.0.3770.142)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QAAR6KQ\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.142, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\NADIAL~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52405}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 38fb16a8889131cda58483dc0849ccfa\n*** Element info: {Using\u003dlink text, value\u003dLog out}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy27.click(Unknown Source)\r\n\tat pages.PageBase.clickButton(PageBase.java:28)\r\n\tat pages.userRegistrationPage.userLogOut(userRegistrationPage.java:58)\r\n\tat steps.UserRegistration.the_registration_page_displayed_successfully(UserRegistration.java:37)\r\n\tat ✽.Then the registration page displayed successfully(src/test/java/features/UserRegistration.feature:8)\r\n",
  "status": "failed"
});
});