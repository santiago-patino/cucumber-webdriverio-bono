Feature: Recovery password into losestudiantes
    As an user I want to recover my password to within losestudiantes website in order to rate teachers

    Scenario Outline: Recover password

      Given I go to losestudiantes home screen
        When I open the login screen
        And I open the recover password screen
        And I set mail <email>
        And I click submit button
        Then I expect a message <message>

     Examples:
      | email            | message |
      | miso1@gmail.com   | "Te acabamos de enviar un correo con instrucciones para recuperar tu cuenta." |