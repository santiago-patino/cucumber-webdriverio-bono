Feature: Register into losestudiantes
    As an user I want to register myself within losestudiantes website in order to rate teachers

    Scenario Outline: Register with invalid email

      Given I go to losestudiantes home screen
        When I open the login screen
        And I open the register screen
        And I set mail <email>
        And I click submit button
        Then I expect to see <error>

     Examples:
      | email            | error |
      | miso             | "Ingresa un correo electrónico válido" |

    Scenario Outline: Register with invalid password less 8 characters

      Given I go to losestudiantes home screen
        When I open the login screen
        And I open the register screen
        And I set password <password>
        And I click submit button
        Then I expect to see <error>

     Examples:
      | password               | error |
      | 1234567                | "La contraseña debe tener 8 caracteres" |


    Scenario Outline: Register failed with and existing user email

      Given I go to losestudiantes home screen
        When I open the login screen
        When I open the register screen
        When I fill with <name> <lastname> <email> <password>
        Then I expect a message <message>

      Examples:
      | name            | lastname | email            | password | message |
      | Andres          | Parra    | miso@gmail.com   | 12345678 | "Ya existe un usuario con este correo" |


    Scenario Outline: Register success

      Given I go to losestudiantes home screen
        When I open the login screen
        And I open the register screen
        And I fill with <name> <lastname> <email> <password>
        Then I expect a message <message>

      Examples:
      | name            | lastname | email                | password | message    | textButton |
      | Andres          | Parra    | miso109@gmail.com     | 12345678 | "Ya puedes calificar profesores, materias y universiades." | "Log in" |