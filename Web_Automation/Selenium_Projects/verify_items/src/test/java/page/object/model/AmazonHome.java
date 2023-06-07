package page.object.model;

import org.openqa.selenium.By;

public class AmazonHome implements ISetUpWebElements{
    
    private By searchBar, searchSubmitButton;
	
	@Override
	public void setUpWebElements() {
		searchBar = By.id("twotabsearchtextbox");
		searchSubmitButton = By.id("nav-search-submit-button");
	}

	public By getSearchBar() {
		return searchBar;
	}

	public By getSearchSubmitButton() {
		return searchSubmitButton;
	}
}
