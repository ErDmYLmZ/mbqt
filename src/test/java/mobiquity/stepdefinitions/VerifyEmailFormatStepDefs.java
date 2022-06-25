package mobiquity.stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import jdk.nashorn.internal.runtime.regexp.joni.Regex;
import mobiquity.TestBase.Base;
import mobiquity.utilities.ConfigurationReader;
import org.apache.commons.validator.routines.EmailValidator;
import org.junit.Assert;

import java.util.List;

import static io.restassured.RestAssured.*;

public class VerifyEmailFormatStepDefs extends Base {



    @Given("User sends get request {string}")
    public void user_sends_get_request(String endPoint) {

        response = given().accept(ContentType.JSON)
                .when().get(baseUrl + endPoint );
        response.prettyPrint();


    }


    @Then("User validates the email format")
    public void userValidatesTheEmailFormat() {
        JsonPath jsonPath = response.jsonPath();
        jsonPath.getString("email");
        List<String> emails=jsonPath.getList("email" );


        verifyEmail(emails);



    }
}
