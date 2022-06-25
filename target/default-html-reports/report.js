$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/InvalidRequestCoverage.feature");
formatter.feature({
  "name": "Invalid  Test Coverage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Negative Test Coverages",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user sends invalid request \"\u003cinvalidEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Status code should be 404",
  "keyword": "Then "
});
formatter.examples({
  "name": "| invalidEndPoint|",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "post"
      ]
    },
    {
      "cells": [
        "comment"
      ]
    },
    {
      "cells": [
        "album"
      ]
    },
    {
      "cells": [
        "photo"
      ]
    },
    {
      "cells": [
        "todo"
      ]
    },
    {
      "cells": [
        "user"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Negative Test Coverages",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user sends invalid request \"\u003cinvalidEndPoint\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.InvalidRequestStepDefs.the_user_sends_invalid_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.InvalidRequestStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Test Coverages",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user sends invalid request \"\u003cinvalidEndPoint\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.InvalidRequestStepDefs.the_user_sends_invalid_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.InvalidRequestStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Test Coverages",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user sends invalid request \"\u003cinvalidEndPoint\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.InvalidRequestStepDefs.the_user_sends_invalid_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.InvalidRequestStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Test Coverages",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user sends invalid request \"\u003cinvalidEndPoint\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.InvalidRequestStepDefs.the_user_sends_invalid_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.InvalidRequestStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Test Coverages",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user sends invalid request \"\u003cinvalidEndPoint\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.InvalidRequestStepDefs.the_user_sends_invalid_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.InvalidRequestStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/SearchDelphine.feature");
formatter.feature({
  "name": "Search Delphine",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Searching with username",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sets the url \"\u003cendPoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Verify status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "name": "Content type should be \"application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User\u0027s information should contain \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "endPoint",
        "name"
      ]
    },
    {
      "cells": [
        "users",
        "Delphine"
      ]
    },
    {
      "cells": [
        "users",
        "marks"
      ]
    },
    {
      "cells": [
        "users",
        "Leanne Graham"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Searching with username",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sets the url \"users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchDelphineStepDefs.userSetsTheUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchDelphineStepDefs.verify_status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Content type should be \"application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchDelphineStepDefs.content_type_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User\u0027s information should contain \"Delphine\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchDelphineStepDefs.user_s_information_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching with username",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sets the url \"users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchDelphineStepDefs.userSetsTheUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchDelphineStepDefs.verify_status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Content type should be \"application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchDelphineStepDefs.content_type_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User\u0027s information should contain \"marks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchDelphineStepDefs.user_s_information_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching with username",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sets the url \"users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchDelphineStepDefs.userSetsTheUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchDelphineStepDefs.verify_status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Content type should be \"application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchDelphineStepDefs.content_type_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User\u0027s information should contain \"Leanne Graham\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchDelphineStepDefs.user_s_information_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/SearchWithPosts.feature");
formatter.feature({
  "name": "Search with Posts",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sets the new url \"posts\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Verify response body contain \"\u003cparam\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "param"
      ]
    },
    {
      "cells": [
        "userId"
      ]
    },
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "title"
      ]
    },
    {
      "cells": [
        "body"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sets the new url \"posts\"",
  "keyword": "Given "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchWithPostsStepDefs.userSetsTheNewUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify response body contain \"userId\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchWithPostsStepDefs.verify_response_body_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sets the new url \"posts\"",
  "keyword": "Given "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchWithPostsStepDefs.userSetsTheNewUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify response body contain \"id\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchWithPostsStepDefs.verify_response_body_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sets the new url \"posts\"",
  "keyword": "Given "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchWithPostsStepDefs.userSetsTheNewUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify response body contain \"title\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchWithPostsStepDefs.verify_response_body_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sets the new url \"posts\"",
  "keyword": "Given "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchWithPostsStepDefs.userSetsTheNewUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify response body contain \"body\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchWithPostsStepDefs.verify_response_body_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Specific idNumber",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sets a new url \"posts\" \"\u003cidNumber\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Verify specific \"\u003cbodyTitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "idNumber",
        "bodyTitle"
      ]
    },
    {
      "cells": [
        "7",
        "magnam facilis autem"
      ]
    },
    {
      "cells": [
        "10",
        "optio molestias id quia eum"
      ]
    },
    {
      "cells": [
        "15",
        "eveniet quod temporibus"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Specific idNumber",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sets a new url \"posts\" \"7\"",
  "keyword": "Given "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchWithPostsStepDefs.user_sets_a_new_url(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify specific \"magnam facilis autem\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchWithPostsStepDefs.verify_specific(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Specific idNumber",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sets a new url \"posts\" \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchWithPostsStepDefs.user_sets_a_new_url(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify specific \"optio molestias id quia eum\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchWithPostsStepDefs.verify_specific(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Specific idNumber",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sets a new url \"posts\" \"15\"",
  "keyword": "Given "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchWithPostsStepDefs.user_sets_a_new_url(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify specific \"eveniet quod temporibus\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.SearchWithPostsStepDefs.verify_specific(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/VerifyEmailFormat.feature");
formatter.feature({
  "name": "Send comment request",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Email Format",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User sends get request \"comments\"",
  "keyword": "Given "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.VerifyEmailFormatStepDefs.user_sends_get_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates the email format",
  "keyword": "Then "
});
formatter.match({
  "location": "mobiquity.stepdefinitions.VerifyEmailFormatStepDefs.userValidatesTheEmailFormat()"
});
formatter.result({
  "status": "passed"
});
});