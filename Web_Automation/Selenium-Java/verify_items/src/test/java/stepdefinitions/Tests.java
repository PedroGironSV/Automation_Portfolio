package stepdefinitions;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;

import actions.BrowserActions;
import driver.Driver;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import page.object.model.AmazonHome;
import page.object.model.AmazonItemDescription;
import page.object.model.AmazonResultsPage;

public class Tests extends BrowserActions {

    AmazonHome home = new AmazonHome();
    AmazonResultsPage resultPage = new AmazonResultsPage();
    AmazonItemDescription itemDescription = new AmazonItemDescription();
    Scenario scenario;

    @Before
    public void setUpScenario(Scenario sc) {
        try{
            this.scenario = sc;
            FileUtils.cleanDirectory(new File("test/report/features/"));
        }catch(Exception exception){
            exception.printStackTrace();
        }
    }

    @Given("I navigate to Amazon home page")
    public void navigatesToAmazonHomePage() {
        Driver.getDriver();
        takeScreenShot(scenario);
    }

    @When("I type {string}")
    public void typeTheSearchedItem(String item) {
        home.setUpWebElements();
        fluentWait(home.getSearchBar());
        cleanInputBox(home.getSearchBar());
        type(home.getSearchBar(), item);
        markElement(home.getSearchBar());
        takeScreenShot(scenario);
    }

    @Then("I click on search button")
    public void clickOnSearchButton() {
        fluentWait(home.getSearchSubmitButton());
        click(home.getSearchSubmitButton());
    }

    @Given("I see the results list for {string}")
    public void seeTheResultsListFor(String item) {
        String currentResultText;
        resultPage.setUpWebElements();
        fluentWait(resultPage.getResultLabel());
        currentResultText = getTextFromElement(resultPage.getResultLabel());
        markElement(resultPage.getResultLabel());
        takeScreenShot(scenario);
        Assert.assertEquals("\"" + item + "\"", currentResultText);
    }

    @When("I navigate to page {string}")
    public void navigateToPage(String page) {
        fluentWait(resultPage.getPaginationStrip());
        if (!page.equals("1")) {
            resultPage.setTargetPageLink(page);
            explicitWait(resultPage.getTargetPageLink());
            click(resultPage.getTargetPageLink());
        }
        fluentWait(resultPage.getPaginationStrip());
        scrollToElement(resultPage.getPaginationStrip());
        takeScreenShot(scenario);
    }

    @Then("I select the item {int}")
    public void selectTheItemOnIndexFromPage(int itemIndex) {
        resultPage.setTargetItemLink(itemIndex);
        explicitWait(resultPage.getTargetItemLink());
        scrollToElement(resultPage.getTargetItemLink());
        takeScreenShot(scenario);
        click(resultPage.getTargetItemLink());
    }

    @Given("I see the description and add the item to shopping cart")
    public void tryToAddTheItemToShoppingCart() {
        String addToCartButton = "Button Add to Cart is Present";
        itemDescription.setUpWebElements();
        fluentWait(itemDescription.getBackLink());
        Assert.assertTrue(addToCartButton, isWebElementDisplayed(itemDescription.getAddToCart()));
        takeScreenShot(scenario);
        click(itemDescription.getAddToCart());
    }

    @When("I see the confirmation message")
    public void seeTheConfirmationMessage() {
        String addToCartMessage = "Added to Cart message is displayed";
        fluentWait(itemDescription.getAddedMessage());
        markElement(itemDescription.getAddedMessage());
        takeScreenShot(scenario);
        Assert.assertTrue(addToCartMessage, isWebElementDisplayed(itemDescription.getAddedMessage()));
    }

    @Then("I see the cart items count is {string}")
    public void seeTheCartItemsCountIncreasing(String cartCount) {
        fluentWait(itemDescription.getCartItemsCount());
        markElement(itemDescription.getCartItemsCount());
        takeScreenShot(scenario);
        Assert.assertEquals(cartCount, getTextFromElement(itemDescription.getCartItemsCount()));
    }

}
