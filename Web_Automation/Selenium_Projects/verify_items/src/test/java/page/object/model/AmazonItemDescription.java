package page.object.model;

import org.openqa.selenium.By;

public class AmazonItemDescription implements ISetUpWebElements{

    private By backLink, addToCart, addedMessage, cartItemsCount;

    @Override
    public void setUpWebElements() {
        backLink = By.id("breadcrumb-back-link");
        addToCart = By.id("add-to-cart-button");
        addedMessage = By.xpath("//*[contains (text(),'Added to Cart')]");
        cartItemsCount = By.id("nav-cart-count");
    }

    public By getBackLink(){
        return backLink;
    }

    public By getAddToCart(){
        return addToCart;
    }

    public By getAddedMessage(){
        return addedMessage;
    }

    public By getCartItemsCount(){
        return cartItemsCount;
    }

}