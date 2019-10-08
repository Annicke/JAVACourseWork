package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class forsalePage {

    public forsalePage(WebDriver driver){
        PageFactory.initElements(driver, this);
    }
    @FindBy(how = How.XPATH, using = "//li[@class='tabBlock-tab is-active w-33 tc f5-5 Google-sans-bold ttu tracked']")
    private WebElement forsale;

    @FindBy(how = How.XPATH, using ="//form[@class='ph0']//input[@id='name']")
    private WebElement propname;

    @FindBy(how = How.XPATH, using ="//form[@class='ph0']//select[@name='bedroom']")
    private WebElement dropdownbed;
    @FindBy(how = How.XPATH, using ="//form[@class='ph0']//div[@class='styled-select mv2-ns pv2-5-ns pv1']//option[contains(text(),'3+')]")
    private WebElement numberbed;

    @FindBy(how = How.XPATH, using ="//form[@class='ph0']//select[@name='bathroom']")
    private WebElement dropdownbath;
    @FindBy(how = How.XPATH, using ="//form[@class='ph0']//div[@class='styled-select mv2-ns pv2-5-ns pv1 ml3']//option[contains(text(),'2+')]")
    private WebElement numberbath;

    @FindBy(how = How.XPATH, using ="//form[@class='ph0']//select[@name='minprice']")
    private WebElement minpdropdown;
    @FindBy(how = How.XPATH, using ="//form[@class='ph0']//option[contains(text(),'No Min')]")
    private WebElement minpselected;

    @FindBy(how = How.XPATH, using ="//form[@class='ph0']//select[@name='maxprice'][contains(text(),'Max price')]")
    private WebElement maxpdropdown;
    @FindBy(how = How.XPATH, using ="//form[@class='ph0']//div[@class='styled-select mv2-ns pv2-5-ns pv1 ml3']//option[contains(text(),'1,000,000')]")
    private WebElement maxpselected;

    @FindBy(how = How.XPATH, using ="//div[contains(@class,'tabBlock-content home')]//div[1]//form[1]//div[3]//input[1]")
    private WebElement searchb;

    @FindBy(how = How.XPATH, using ="//h1[@class='ml2-l mb3-l mb2 ma0 f4 f3-l lh-title black-90 fw6 Google-sans-medium mt1']")
    private WebElement message;

    public void ClickForSalePage(){
        forsale.click();
    }
    public void EnterPropName(String PropName){
        propname.sendKeys(PropName);
    }
    public void ClickDropdownBed(){
        dropdownbed.click();
    }
    public void SelectNumberBed(){
        numberbed.click();
    }
    public void ClickDropdownBath(){
        dropdownbath.click();
    }
    public void SelectNumberBath(){
        numberbath.click();
    }
    public void ClickMinpDropdown(){
        minpdropdown.click();
    }
    public void SelectMinpSelected(){
        minpselected.click();
    }
    public void ClickMaxDropdown(){
        maxpdropdown.click();
    }
    public void SelectMaxpSelected(){
        maxpselected.click();
    }
    public void ClickSearchB(){
        searchb.click();
    }
    public String MessageIsDisplayed(){
        return message.getText();
    }

}
