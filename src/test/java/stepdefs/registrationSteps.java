package stepdefs;

import PageObject.registrationPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

public class registrationSteps {

    public static WebDriver driver;
    public registrationPage registration;

    public registrationSteps(){
        System.setProperty("webdriver.chrome.driver","C:\\BlueskycitadelP\\Chrome1\\chromedriver.exe");
        driver = new ChromeDriver();
        registration = new registrationPage(driver);
        driver.get("https://propertyrete.com");
    }

    @When("^I click on register$")
    public void i_click_on_register() throws Throwable {
        registration.ClickOnRegisterButton();
    }

    @And("^I enter \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iEnter(String FirstName, String LastName, String EmailAddress, String  MobileNumber, String  Password, String ConfirmPassword) throws Throwable {
        registration.EnterFirstName(FirstName);
        registration.EnterLastName(LastName);
        registration.EnterEmailAddress(EmailAddress);
        registration.ClickDropdownButton();
        registration.SelectCountryFlag();
        registration.EnterMobileNumber(MobileNumber);
        registration.EnterPassword( Password);
        registration.EnterConfirmPassword(ConfirmPassword);
    }


    @And("^I click on create account$")
    public void iClickOnCreateAccount() {
        registration.ClickOnCreateAccount();
    }


    @Then("^The message \"([^\"]*)\" is displayed$")
    public void the_message_is_displayed(String messages) throws Throwable {
        Assert.assertTrue(registration.DisplayMessage());
       Assert.assertTrue (registration.DisplayMessage2());
        Assert.assertTrue(registration.DisplayMessage3());
       Assert.assertTrue (registration.DisplayMessage4());
    }


   /* @When("^I enter \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"(\\d+)\"$")
    public void i_enter(String FirstName, String LastName, String EmailAddress, String MobileNumber, String Password, int ConfirmPassword) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    } */

}
