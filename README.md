# Test Automation Framework

A comprehensive **Selenium-based Test Automation Framework** built with Java, Maven, TestNG, and Cucumber following **BDD**, **Page Object Model (POM)**, and **Data-Driven Testing** best practices.

This framework is designed for **scalable**, **maintainable**, and **CI-ready** web test automation.

## 🧰 Tech Stack

- **Java** (73.7%)
- **Selenium WebDriver**
- **Maven** - Build automation
- **TestNG** - Testing framework
- **Cucumber** - BDD (Behavior-Driven Development)
- **Page Object Model (POM)** - Design pattern
- **Data-Driven Testing** - Parameterized tests
- **Jenkins** - CI/CD integration ready
- **Git** - Version control

## 📊 Language Composition

- Java: 73.7%
- JavaScript: 22%
- CSS: 2.7%
- Other: 1.6%

## 📁 Project Structure

```
TestAutomationFramework
│
├── drivers/                    # WebDriver binaries
├── src/
│   ├── main/java              # Core framework utilities
│   │   ├── pages/             # Page Object Model classes
│   │   ├── utilities/         # Helper and utility classes
│   │   └── base/              # Base test class
│   │
│   └── test/java              
│       ├── stepDefinitions/   # Cucumber step definitions
│       └── runners/           # Test runners
│
├── resources/
│   ├── features/              # Cucumber feature files (.feature)
│   └── testdata/              # Test data files (CSV, Excel, JSON)
│
├── screenshots/               # Failed test screenshots
├── target/                    # Maven build output
├── pom.xml                    # Maven dependencies & plugins
├── testng.xml                 # TestNG configuration
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Java 8 or higher
- Maven 3.6+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mokhalil89/TestAutomationFramework.git
   cd TestAutomationFramework
   ```

2. **Install dependencies**
   ```bash
   mvn clean install
   ```

## 🧪 Running Tests

### Run all tests
```bash
mvn test
```

### Run specific test suite
```bash
mvn test -Dtest=TestClassName
```

### Run with TestNG XML configuration
```bash
mvn test -DsuiteXmlFile=testng.xml
```

### Run Cucumber tests
```bash
mvn test -Dtest=CucumberRunner
```

## 📋 Features

✅ **Page Object Model** - Organized, maintainable code structure  
✅ **BDD with Cucumber** - Human-readable test scenarios  
✅ **Data-Driven Testing** - Test with multiple data sets  
✅ **Screenshot on Failure** - Automatic screenshot capture  
✅ **Cross-browser Support** - Run on Chrome, Firefox, Safari, Edge  
✅ **Jenkins Ready** - Easy CI/CD integration  
✅ **Detailed Reporting** - TestNG and Cucumber reports  

## 📝 Example Test Case

```java
// Page Object
public class LoginPage {
    private WebDriver driver;
    private By usernameField = By.id("username");
    private By passwordField = By.id("password");
    private By loginButton = By.xpath("//button[@type='submit']");
    
    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }
    
    public void login(String username, String password) {
        driver.findElement(usernameField).sendKeys(username);
        driver.findElement(passwordField).sendKeys(password);
        driver.findElement(loginButton).click();
    }
}
```

## 🔧 Configuration

Update `pom.xml` to configure dependencies and plugins for your environment.

Update `testng.xml` to manage test suite execution.

## 📊 Reports

Test reports are generated automatically after execution:
- **TestNG Reports** - target/surefire-reports
- **Cucumber Reports** - target/cucumber-reports

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or suggestions, please reach out at [your-email@example.com](mailto:your-email@example.com)

---

**Happy Testing! 🎉**
