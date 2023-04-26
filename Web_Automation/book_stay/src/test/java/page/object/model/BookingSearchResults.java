package page.object.model;

import org.openqa.selenium.By;

public class BookingSearchResults implements ISetUpWebElements{

    private By destinationLabel, evaluationType, availability;

    @Override
    public void setUpWebElements() {
        destinationLabel = By.cssSelector("div.b3d1cacd40.d5f78961c3.a2cb913cd1 > h1");
    }

    public void setEvaluationType(String evaluation){
        StringBuilder evaluationXpath = new StringBuilder();
        evaluationXpath = evaluationXpath.append("//div[text()='").append(evaluation).append("']");
        evaluationType = By.xpath(evaluationXpath.toString());
    }

    public void setAvailability(String evaluation){
        StringBuilder availabilityXpath = new StringBuilder();
        availabilityXpath = availabilityXpath.append("//div[text()='").append(evaluation).append("']/ancestor::a");
        availability = By.xpath(availabilityXpath.toString());
    }

    public By getEvaluationType() {
        return evaluationType;
    }

    public By getAvailability() {
        return availability;
    }

    public By getDestinationLabel(){
        return destinationLabel;
    }
}
