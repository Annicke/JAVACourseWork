package stepdefs;

import PageObject.loginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

public class loginSteps {

        public static WebDriver driver;
        public loginPage login;
        public loginSteps(){

            System.setProperty("webdriver.chrome.driver","C:\\BlueskycitadelP\\Chrome1\\chromedriver.exe");
            driver = new ChromeDriver();
            login = new loginPage(driver);
    }

    @Given("^I navigate to the site \"([^\"]*)\"$")
    public void i_navigate_to_the_site(String arg1) throws Throwable {

        driver.get("https://propertyrete.com");
    }

    @When("^I click on login button$")
    public void i_click_on_login_button() throws Throwable {
        login.ClickLoginButton();
    }

    @When("^I enter EmailAddress \"([^\"]*)\",$")
    public void i_enter_EmailAddress(String arg1) throws Throwable {
        login.EnterEmail();
    }

    @When("^I enter Password \"([^\"]*)\"$")
    public void i_enter_Password(String arg1) throws Throwable {
        login.EnterPassword();
    }

    @When("^I click on Sign in button$")
    public void i_click_on_Sign_in_button() throws Throwable {
        login.ClickSignIn();
    }

    @Then("^I should be registered$")
    public void i_should_be_registered() throws Throwable {
        Assert.assertTrue(login.DisplayProfileName());
    }

    @And("^I enter wrong EmailAddress \"([^\"]*)\"$")
    public void iEnterWrongEmailAddress(String arg0) throws Throwable {
        login.EnterWrongPassword();
    }

    @Then("^Login button shows$")
    public void login_button_shows() throws Throwable {
        Assert.assertTrue(login.DisplayLoginButton());
    }

   /* @Then("^I am not registered$")
    public void i_am_not_registered() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    } */

}
