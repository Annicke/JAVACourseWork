package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class registrationPage {

    public registrationPage(WebDriver driver){
        PageFactory.initElements(driver,this);
    }

    @FindBy(how = How.CSS, using = ".bg-white-90")
    private WebElement register;

    @FindBy(how = How.ID, using ="first_name")
    private WebElement firstname;

    @FindBy(how = How.XPATH, using ="//input[@id='last_name']")
    private WebElement lastname;

    @FindBy(how = How.ID, using ="email")
    private WebElement emailaddress;

    @FindBy(how = How.XPATH, using ="//input[@id='mobile']")
    private WebElement mobilenumber;

    @FindBy(how = How.XPATH, using ="//div[@class='iti-arrow']")
    private WebElement dropdown;

    @FindBy(how = How.CSS, using = "#iti-item-gb")
    private WebElement countryflag;

    @FindBy(how = How.ID, using ="password")
    private WebElement pswd;

    @FindBy(how = How.XPATH, using ="//input[@id='confirm_password']")
    private WebElement confpaswd;

    @FindBy(how = How.ID, using ="btn_register")
    private WebElement createaccount;

    @FindBy(how = How.XPATH, using ="//span[@id='dng_msg']")
    private WebElement mesg1;

    @FindBy(how = How.XPATH, using ="//span[@id='dng_msg']")
    private WebElement mesg2;

    @FindBy(how = How.CSS, using ="#dng_msg > p:nth-child(1)")
    private WebElement mesg3;

    @FindBy(how = How.XPATH, using =" //p[contains(text(),'The Confirm Password field does not match the Password field.')]")
    private WebElement mesg4;

    public void ClickOnRegisterButton(){
        register.click();
    }
    public void EnterFirstName(String FirstName){
        firstname.sendKeys(FirstName);
    }
    public void EnterLastName(String LastName){
        lastname.sendKeys(LastName);
    }
    public void EnterEmailAddress(String EmailAddress){
        emailaddress.sendKeys(EmailAddress);
    }
    public void ClickDropdownButton(){
        dropdown.click();
    }
    public void SelectCountryFlag(){
        countryflag.click();
    }
    public void EnterMobileNumber(String MobileNumber){
        mobilenumber.sendKeys(MobileNumber);
    }
    public void EnterPassword(String Password){
        pswd.sendKeys( Password);
    }
    public void EnterConfirmPassword(String ConfirmPassword){
        confpaswd.sendKeys(ConfirmPassword);
    }
    public void ClickOnCreateAccount(){
        createaccount.click();
    }
    public String GetMessage(String messages){
        return mesg1.getText();
    }
    public String GetMessage2(String messages){
        return mesg2.getText();
    }
    public String GetMessage3(String messages){
        return mesg3.getText();
    }
    public String GetMessage4(String messages){
        return mesg4.getText();
    }



}
