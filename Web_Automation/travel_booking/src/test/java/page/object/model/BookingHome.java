package page.object.model;

import org.openqa.selenium.By;

public class BookingHome implements ISetUpWebElements{
    
    By geniusExit, destination, monthYear, checkInDay, checkOutDay, calendar, nextCoupleMonths, calendarTable;

    @Override
    public void setUpWebElements() {
        geniusExit = By.cssSelector("button.fc63351294.a822bdf511.e3c025e003.fa565176a8.f7db01295e.c334e6f658.ae1678b153");
        destination = By.name("ss");
        monthYear = By.cssSelector("h3.ac78a73c96.ab0d1629e5");
        calendar = By.cssSelector("button.d47738b911.e246f833f7.fe211c0731");
        nextCoupleMonths = By.cssSelector("button.fc63351294.a822bdf511.e3c025e003.fa565176a8.cfb238afa1.c334e6f658.ae1678b153.c9fa5fc96d.be298b15fa");
        calendarTable = By.cssSelector("div#calendar-searchboxdatepicker");
    }

    public By getGeniusExit() {
        return geniusExit;
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
}
