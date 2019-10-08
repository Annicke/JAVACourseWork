package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class loginPage {

    public loginPage(WebDriver driver){
        PageFactory.initElements(driver, this);

    }

    @FindBy(how = How.CSS, using =".ml2")
    private WebElement login;
    @FindBy(how = How.ID, using ="user_email")
    private WebElement emailaddress;
    @FindBy(how = How.ID, using ="user_password")
    private WebElement password;
    @FindBy(how = How.CSS, using ="#btn_signin")
    private WebElement signin;
    @FindBy(how = How.XPATH, using ="//a[@class='black bw0 f6-ns f7 fw3 bg-white-90 br1 pv2-5-ns pv2-5 ph3 ttu tracked outline-0 bw0 link']")
    private WebElement profilename;
    @FindBy(how = How.CSS, using =".ml2")
    private WebElement loginbutton;
    @FindBy(how = How.ID, using ="user_password")
    private WebElement wrongpassword;


    public void ClickLoginButton(){
        login.click();
    }
    public void EnterEmail(){
        emailaddress.sendKeys("blessings4u10@gmail.com");
    }
    public void EnterPassword(){
        password.sendKeys("12345hs");
    }
    public void ClickSignIn(){
        signin.click();
    }
    public boolean DisplayProfileName(){
        return profilename.isDisplayed();
    }
    public void EnterWrongPassword(){
        wrongpassword.sendKeys("sibaveun2016.@c");
    }
    public boolean DisplayLoginButton(){
        return loginbutton.isDisplayed();
    }
}
