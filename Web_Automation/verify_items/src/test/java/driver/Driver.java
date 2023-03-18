package driver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Driver {
    
    private static WebDriver driver;
    private static String URL = "https://www.amazon.com/";

    private static WebDriver setUpDriver(){
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        driver = new ChromeDriver(options);
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
