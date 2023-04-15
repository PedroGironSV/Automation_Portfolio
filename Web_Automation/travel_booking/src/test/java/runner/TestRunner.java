package runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import actions.BrowserActions;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/test/java/features",
    glue = {"stepdefinitions"},
    plugin = {"json:test/report/cucumber_report.json"}
)

public class TestRunner {
    
}
