package page.object.model;

import org.openqa.selenium.By;

public class AmazonResultsPage implements ISetUpWebElements{
    
    private By resultLabel, paginationStrip, targetPageLink, targetItemLink;

    @Override
    public void setUpWebElements() {
        resultLabel = By.cssSelector("span.a-color-state.a-text-bold");
        paginationStrip = By.className("s-pagination-strip");
    }
    
    public By getResultLabel(){
        return resultLabel;
    }

    public By getPaginationStrip(){
        return paginationStrip;
    }

    public void setTargetPageLink(String partialLinkText){
        targetPageLink = By.linkText(partialLinkText);
    }

    public By getTargetPageLink(){
        return targetPageLink;
    }

    public void setTargetItemLink(int itemIndex){
        targetItemLink = By.xpath("//div[@data-index='"+ itemIndex + "']//a");
    }

    public By getTargetItemLink(){
        return targetItemLink;
    }
    
}
