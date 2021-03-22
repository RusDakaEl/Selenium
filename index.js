const {Builder, By,} = require("selenium-webdriver");

const driver = new Builder()
.forBrowser("firefox")
.build();

async function simpleLogin() {
    try {
        await driver.get("https://snow2.onperspektiva24.com/agent-crm/sign-in/login");
        await driver.findElement(By.id("loginform-username")).sendKeys("TestS");
        await driver.findElement(By.id("loginform-password")).sendKeys("1212");
        await driver.findElement(By.name("login-button")).click();

        await driver.sleep(1000);

        await driver.get("https://snow2.onperspektiva24.com/agent-crm/");

        await driver.findElement(By.className("positive-button top-panel__button pull-right enjoyhint-deal-step-13 new-client-button")).click();

    } catch (error) {
        console.log("Error");
    }
}



simpleLogin();
