package stepdefs;

import PageObject.forsalePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class forsaleSteps {

    public WebDriver driver;
    public forsalePage forsale;

    public forsaleSteps(){
        System.setProperty("webdriver.chrome.driver","C:\\BlueskycitadelP\\Chrome1\\chromedriver.exe");
        driver = new ChromeDriver();
        forsale = new forsalePage(driver);
        driver.get("https://propertyrete.com");
    }

    @When("^I click on for sale page$")
    public void i_click_on_for_sale_page() throws Throwable {
        forsale.ClickForSalePage();
    }

    @When("^enter \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void enter(String Propname, String Bedroom, String Bathroom, String Minprice, String Maxprice) throws Throwable {
       forsale.EnterPropName(Propname);
       forsale.ClickDropdownBed();
       forsale.SelectNumberBed();
       forsale.ClickDropdownBath();
       forsale.SelectNumberBath();
       forsale.ClickMinpDropdown();
       forsale.SelectMinpSelected();
       forsale.ClickMaxDropdown();
       forsale.SelectMaxpSelected();
    }

    @When("^I click on search button$")
    public void i_click_on_search_button() throws Throwable {
       forsale.ClickSearchB();
    }

    @Then("^the result \"([^\"]*)\"$")
    public void the_result(String result) throws Throwable {
        Assert.assertEquals(forsale.MessageIsDisplayed(), "0 properties found");
    }

}
