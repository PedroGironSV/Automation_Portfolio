package page.object.model;

import org.openqa.selenium.By;

public class BookingHome implements ISetUpWebElements{
    
    private By geniusExit, credentialPicker, destination, monthYear, checkInDay, checkOutDay, calendar, nextCoupleMonths, calendarTable, search;
    private By occupancyConfig, done, adultsCount, roomsCount;
    private By reduceAdults, increaseAdults, reduceRooms, increaseRooms;

    @Override
    public void setUpWebElements() {
        credentialPicker = By.id("credential_picker_container");
        geniusExit = By.cssSelector("button.fc63351294.a822bdf511.e3c025e003.fa565176a8.f7db01295e.c334e6f658.ae1678b153");
        destination = By.name("ss");
        monthYear = By.cssSelector("h3.ac78a73c96.ab0d1629e5");
        calendar = By.cssSelector("button.d47738b911.e246f833f7.fe211c0731");
        nextCoupleMonths = By.cssSelector("button.fc63351294.a822bdf511.e3c025e003.fa565176a8.cfb238afa1.c334e6f658.ae1678b153.c9fa5fc96d.be298b15fa");
        calendarTable = By.cssSelector("div.b91c144835");
        occupancyConfig = By.cssSelector("button.d47738b911.b7d08821c3");

        adultsCount = By.cssSelector("div:nth-child(1) > div.e98c626f34 > span");
        roomsCount = By.cssSelector("div:nth-child(3) > div.e98c626f34 > span");

        reduceAdults = By.cssSelector("div:nth-child(1) > div.e98c626f34 > button.fc63351294.a822bdf511.e3c025e003.fa565176a8.f7db01295e.c334e6f658.e1b7cfea84.cd7aa7c891");
        increaseAdults = By.cssSelector("div:nth-child(1) > div.e98c626f34 > button.fc63351294.a822bdf511.e3c025e003.fa565176a8.f7db01295e.c334e6f658.e1b7cfea84.d64a4ea64d");
        reduceRooms = By.cssSelector("div:nth-child(3) > div.e98c626f34 > button.fc63351294.a822bdf511.e3c025e003.fa565176a8.f7db01295e.c334e6f658.e1b7cfea84.cd7aa7c891");
        increaseRooms = By.cssSelector("div:nth-child(3) > div.e98c626f34 > button.fc63351294.a822bdf511.e3c025e003.fa565176a8.f7db01295e.c334e6f658.e1b7cfea84.d64a4ea64d");
        done = By.cssSelector("button.fc63351294.a822bdf511.e2b4ffd73d.f7db01295e.c938084447.a9a04704ee.d285d0ebe9");

        search = By.cssSelector("button.fc63351294.a822bdf511.d4b6b7a9e7.cfb238afa1.c938084447.f4605622ad.aa11d0d5cd");
    }

    public By getGeniusExit() {
        return geniusExit;
    }

    public By getCredentialPicker(){
        return credentialPicker;
    }

    public By getDestination() {
        return destination;
    }

    public By getMonthYear() {
        return monthYear;
    }

    public void setCheckInDay(String dataDateIn){
        checkInDay = By.xpath("//span[@data-date='"+ dataDateIn +"']");
    }

    public By getCheckInDay() {
        return checkInDay;
    }

    public void setCheckOutDay(String dataDateOut){
        checkOutDay = By.xpath("//span[@data-date='"+ dataDateOut +"']");
    }

    public By getCheckOutDay() {
        return checkOutDay;
    }

    public By getCalendar(){
        return calendar;
    }

    public By getNextCoupleMonths(){
        return nextCoupleMonths;
    }

    public By calendarTable(){
        return calendarTable;
    }

    public By getOccupancyConfig() {
        return occupancyConfig;
    }

    public By getAdultsCount() {
        return adultsCount;
    }

    public By getRoomsCount() {
        return roomsCount;
    }
    
    public By getReduceAdults() {
        return reduceAdults;
    }

    public By getIncreaseAdults() {
        return increaseAdults;
    }

    public By getReduceRooms() {
        return reduceRooms;
    }

    public By getIncreaseRooms() {
        return increaseRooms;
    }
    
    public By getDone() {
        return done;
    }

    public By getSearch(){
        return search;
    }
    
}
