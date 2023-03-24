package actions;

import java.time.Duration;
import java.util.NoSuchElementException;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import driver.Driver;
import io.cucumber.java.Scenario;

public class BrowserActions {
    
    public void explicitWait(By locator){
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), Duration.ofSeconds(5), Duration.ofMillis(100));
		wait.until(ExpectedConditions.elementToBeClickable(locator));
    }

    public void fluentWait(By locator){
        Wait<WebDriver> wait = new FluentWait<WebDriver>(Driver.getDriver())
				.withTimeout(Duration.ofSeconds(5))
				.pollingEvery(Duration.ofMillis(100))
				.ignoring(NoSuchElementException.class);
		wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    public void implicitWait(){
        Driver.getDriver().manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
    }

    public void click(By locator){
        Driver.getDriver().findElement(locator).click();
    }

    public void type(By locator, String text){
        Driver.getDriver().findElement(locator).sendKeys(text);
    }

    public void cleanInputBox(By locator){
        Driver.getDriver().findElement(locator).clear();
    }

    public boolean isWebElementDisplayed(By locator){
        return Driver.getDriver().findElement(locator).isDisplayed();
    }

    public void scrollToElement(By locator) {
		WebElement element = Driver.getDriver().findElement(locator);
		((JavascriptExecutor) Driver.getDriver()).executeScript("arguments[0].scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});", element);
	}

    public String getTextFromElement(By locator) {
		return Driver.getDriver().findElement(locator).getAttribute("innerText");
	}

    public void markElement(By locator) {
        WebElement targetElement = Driver.getDriver().findElement(locator);
        String elementClass = targetElement.getAttribute("class"), querySelector;
        String elementTag = targetElement.getTagName();
        elementClass = elementClass.replace(" ", ".");
        querySelector = "document.querySelector('"+ elementTag + "."+ elementClass +"').style.border='3px solid red'";
		((JavascriptExecutor) Driver.getDriver()).executeScript(querySelector);
		implicitWait();
	}

    public void takeScreenShot(Scenario scenario){
        byte[] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
        scenario.attach(screenshot, "image/png", "stepEvidence");
    }

    public static void closeBrowser() {
		Driver.getDriver().quit();
	}

}
