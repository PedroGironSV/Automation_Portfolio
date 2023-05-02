package driver;

import org.openqa.selenium.WebDriver;

public class Driver {
    
    private static WebDriver driver;
    private static String URL = "https://www.booking.com/";

    public static WebDriver setUpDriver(){
        driver = WebDriverFactory.getDriver(Browser.EDGE);
        driver.manage().window().maximize();
        driver.get(URL);
        return driver;
    }

    public static WebDriver getDriver(){
        if(driver == null){
            return setUpDriver();
        }
        return driver;
    }

    private Driver(){

    }
}
