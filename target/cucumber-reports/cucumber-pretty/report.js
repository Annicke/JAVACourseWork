$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("forsale.feature");
formatter.feature({
  "line": 1,
  "name": "For sale",
  "description": "As a user of Propertyrete\r\nI want to click on for sale page\r\nSo that I can make any search.",
  "id": "for-sale",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "",
  "description": "",
  "id": "for-sale;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I navigate to the site \"https://propertyrete.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on for sale page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter \"\u003cPropname\u003e\", \"\u003cBedroom\u003e\", \"\u003cBathroom\u003e\",\"\u003cMinprice\u003e\",\"\u003cMaxprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the result \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "Valid for sale",
  "description": "",
  "id": "for-sale;;valid-for-sale",
  "rows": [
    {
      "cells": [
        "Propname",
        "Bedroom",
        "Bathroom",
        "Minprice",
        "Maxprice",
        "result"
      ],
      "line": 15,
      "id": "for-sale;;valid-for-sale;1"
    },
    {
      "cells": [
        "House",
        "3",
        "2",
        "No Min",
        "400,000",
        "0 properties found"
      ],
      "line": 16,
      "id": "for-sale;;valid-for-sale;2"
    },
    {
      "cells": [
        "Flat",
        "1",
        "1",
        "No Min",
        "100,000",
        "0 properties found"
      ],
      "line": 17,
      "id": "for-sale;;valid-for-sale;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "for-sale;;valid-for-sale;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I navigate to the site \"https://propertyrete.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on for sale page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter \"House\", \"3\", \"2\",\"No Min\",\"400,000\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the result \"0 properties found\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "for-sale;;valid-for-sale;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I navigate to the site \"https://propertyrete.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on for sale page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter \"Flat\", \"1\", \"1\",\"No Min\",\"100,000\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the result \"0 properties found\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 20,
  "name": "Invalid for sale",
  "description": "",
  "id": "for-sale;;invalid-for-sale",
  "rows": [
    {
      "cells": [
        "Propname",
        "Bedroom",
        "Bathroom",
        "Minprice",
        "Maxprice",
        "result"
      ],
      "line": 21,
      "id": "for-sale;;invalid-for-sale;1"
    },
    {
      "comments": [
        {
          "line": 22,
          "value": "# No maximum price"
        }
      ],
      "cells": [
        "House",
        "1",
        "3",
        "No Min",
        "No Max",
        "0 properties found"
      ],
      "line": 23,
      "id": "for-sale;;invalid-for-sale;2"
    },
    {
      "comments": [
        {
          "line": 24,
          "value": "# No bathroom selected"
        }
      ],
      "cells": [
        "Flat",
        "4",
        "",
        "10,000",
        "100,000",
        "0 properties found"
      ],
      "line": 25,
      "id": "for-sale;;invalid-for-sale;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "# No maximum price"
    }
  ],
  "line": 23,
  "name": "",
  "description": "",
  "id": "for-sale;;invalid-for-sale;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I navigate to the site \"https://propertyrete.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on for sale page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter \"House\", \"1\", \"3\",\"No Min\",\"No Max\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the result \"0 properties found\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "comments": [
    {
      "line": 24,
      "value": "# No bathroom selected"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "for-sale;;invalid-for-sale;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I navigate to the site \"https://propertyrete.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on for sale page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter \"Flat\", \"4\", \"\",\"10,000\",\"100,000\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the result \"0 properties found\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login",
  "description": "As a user\r\nI want to login\r\nso that I can use the site",
  "id": "login",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I navigate to the site \"https://propertyrete.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 10,
  "name": "Valid login",
  "description": "",
  "id": "login;valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I enter EmailAddress \"blessings4u10@gmail.com\",",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Password \"12345hs \"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should be registered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I navigate to the site \"https://propertyrete.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid login -Wrong Email",
  "description": "",
  "id": "login;invalid-login--wrong-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I enter wrong EmailAddress \"sibaveun2016.@c \"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Password \"12345hs \"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Login button shows",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "As a user\r\nI want to register\r\nso that I can use the site",
  "id": "registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Valid \u0026 Invalid registration",
  "description": "",
  "id": "registration;valid-\u0026-invalid-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I enter \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cEmailAddress\u003e\",\"\u003cMobileNumber\u003e\",\"\u003cPassword\u003e\",\"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on create account",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The message \"\u003cmessages\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "Valid registration",
  "description": "",
  "id": "registration;valid-\u0026-invalid-registration;valid-registration",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "EmailAddress",
        "MobileNumber",
        "Password",
        "ConfirmPassword",
        "messages"
      ],
      "line": 17,
      "id": "registration;valid-\u0026-invalid-registration;valid-registration;1"
    },
    {
      "cells": [
        "Anne",
        "Mensi",
        "blessings4u10@gmail.com",
        "07575555555",
        "12345hs",
        "12345hs",
        "The Captcha field is required."
      ],
      "line": 18,
      "id": "registration;valid-\u0026-invalid-registration;valid-registration;2"
    },
    {
      "cells": [
        "Annicke",
        "grandi",
        "gif@myautomation.33mail.com",
        "07576543212",
        "12345hs",
        "12345hs",
        "The Captcha field is required."
      ],
      "line": 19,
      "id": "registration;valid-\u0026-invalid-registration;valid-registration;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I navigate to the site \"https://propertyrete.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on register",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 18,
  "name": "Valid \u0026 Invalid registration",
  "description": "",
  "id": "registration;valid-\u0026-invalid-registration;valid-registration;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I enter \"Anne\",\"Mensi\",\"blessings4u10@gmail.com\",\"07575555555\",\"12345hs\",\"12345hs\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on create account",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The message \"The Captcha field is required.\" is displayed",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I navigate to the site \"https://propertyrete.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on register",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 19,
  "name": "Valid \u0026 Invalid registration",
  "description": "",
  "id": "registration;valid-\u0026-invalid-registration;valid-registration;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I enter \"Annicke\",\"grandi\",\"gif@myautomation.33mail.com\",\"07576543212\",\"12345hs\",\"12345hs\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on create account",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The message \"The Captcha field is required.\" is displayed",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 22,
  "name": "Invalid registration",
  "description": "",
  "id": "registration;valid-\u0026-invalid-registration;invalid-registration",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "EmailAddress",
        "MobileNumber",
        "Password",
        "ConfirmPassword",
        "messages"
      ],
      "line": 23,
      "id": "registration;valid-\u0026-invalid-registration;invalid-registration;1"
    },
    {
      "comments": [
        {
          "line": 24,
          "value": "# wrong email"
        }
      ],
      "cells": [
        "Anne",
        "Mensi",
        "blessings4u10@gm.om",
        "07575555555",
        "12345hs",
        "12345hs",
        "The Email Address field must contain a valid email address."
      ],
      "line": 25,
      "id": "registration;valid-\u0026-invalid-registration;invalid-registration;2"
    },
    {
      "comments": [
        {
          "line": 26,
          "value": "# uncorresponding password"
        }
      ],
      "cells": [
        "Annicke",
        "grandi",
        "gif@myautomation.33mail.com",
        "07576543212",
        "12345hs",
        "1234",
        "The Confirm Password field does not match the Password field."
      ],
      "line": 27,
      "id": "registration;valid-\u0026-invalid-registration;invalid-registration;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I navigate to the site \"https://propertyrete.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on register",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "comments": [
    {
      "line": 24,
      "value": "# wrong email"
    }
  ],
  "line": 25,
  "name": "Valid \u0026 Invalid registration",
  "description": "",
  "id": "registration;valid-\u0026-invalid-registration;invalid-registration;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I enter \"Anne\",\"Mensi\",\"blessings4u10@gm.om\",\"07575555555\",\"12345hs\",\"12345hs\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on create account",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The message \"The Email Address field must contain a valid email address.\" is displayed",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I navigate to the site \"https://propertyrete.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on register",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "# uncorresponding password"
    }
  ],
  "line": 27,
  "name": "Valid \u0026 Invalid registration",
  "description": "",
  "id": "registration;valid-\u0026-invalid-registration;invalid-registration;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I enter \"Annicke\",\"grandi\",\"gif@myautomation.33mail.com\",\"07576543212\",\"12345hs\",\"1234\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on create account",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The message \"The Confirm Password field does not match the Password field.\" is displayed",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});