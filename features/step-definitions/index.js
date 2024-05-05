const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given('I go to losestudiantes home screen', async() => {
    browser.url(`/uniandes/`)

    await new Promise(r => setTimeout(r, 2000))
    var modalMessage = $('.modal-content .modal-header button')
    if (await modalMessage.isDisplayed()) {
        await modalMessage.click();
    }
});

When('I open the login screen', async() => {
    $('button.loginButton').waitForExist(5000);
    $('button.loginButton').waitForDisplayed(5000);
    $('button.loginButton').click();
});

When('I fill a wrong email and password', async() => {
    var cajaLogIn = $('.cajaLogIn');

    var mailInput = await $('input[name="email"]');
    await mailInput.click();
    await mailInput.setValue('wrongemail@example.com');

    var passwordInput = await $('input[name="password"]');
    await passwordInput.click();
    await passwordInput.setValue('123467891');
});

When('I try to login', async() => {
    await new Promise(r => setTimeout(r, 500))
    await $('button.fullWidth').click();
});

Then('I expect to not be able to login', async() => {
    $('.notice.alert.alert-danger').waitForDisplayed(5000);
});

When(/^I fill with (.*) and (.*)$/ , async(email, password) => {
    var mailInput = await $('input[name="email"]');
    mailInput.click();
    mailInput.setValue(email);
    
    var passwordInput = await $('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue(password)
 });
 
 Then('I expect to see {string}', async(error) => {
    await new Promise(r => setTimeout(r, 2000))
    var alertText = await $('.notice.alert.alert-danger').getText();
    expect(alertText).toEqual(error);
 });

 Then('Valid text button login {string}', async(success) => {
    await new Promise(r => setTimeout(r, 2000))
    var buttonText = await $('button.loginButton').getText();
    expect(buttonText).toEqual(success);
 });

 When('I sigout', async() => {
    await new Promise(r => setTimeout(r, 2000))
    var buttonSession = await $('button.loginButton');
    buttonSession.click();
 });

 When('I close modal message', async() => {
    var buttonOk = await $('button.swal2-confirm');
    buttonOk.click();
 });



 //--- Register

When('I open the register screen', async() => {
    await new Promise(r => setTimeout(r, 1000))
    $('.modal-content  .text-center.font-bold a').click();
});

When(/^I fill with (.*) (.*) (.*) (.*)$/ , async(name, lastname, email, password) => {
    await new Promise(r => setTimeout(r, 1000))
    var firstnameInput = await $('input[name="firstname"]');
    firstnameInput.click();
    firstnameInput.setValue(name);
    
    var lastnameInput = await $('input[name="lastname"]');
    lastnameInput.click();
    lastnameInput.setValue(lastname);

    var emailInput = await $('input[name="email"]');
    emailInput.click();
    emailInput.setValue(email);
    
    var passwordInput = await $('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue(password);
    
    var passwordInput2 = await $('input[name="password2"]');
    passwordInput2.click();
    passwordInput2.setValue(password);
    
    (await $('input[name="accept"]')).click();

    (await $('button[type="submit"]')).click();
 });

 Then('I expect a message {string}', async(message) => {
    await new Promise(r => setTimeout(r, 2000))
    var textMessage = await $('#swal2-content').getText();
    expect(textMessage).toEqual(message);
 });

 When(/^I set password (.*)$/, async(password) => {
    await new Promise(r => setTimeout(r, 2000))
    var passwordInput = await $('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue(password);
});




 //--- Recover screen

 When('I open the recover password screen', async() => {
    await new Promise(r => setTimeout(r, 1000))
    $('.modal-content form a').click();
});

When(/^I set mail (.*)$/, async(email) => {
    await new Promise(r => setTimeout(r, 2000))
    var emailInput = await $('input[name="email"]');
    emailInput.click();
    emailInput.setValue(email);
});

When("I click submit button", async() => {
    await new Promise(r => setTimeout(r, 2000))
    var emailInput = await $('button[type="submit"]');
    emailInput.click();
    //(await $('button[type="submit"]')).click();
});




