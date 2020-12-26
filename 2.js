const {Builder, By, until} = require("selenium-webdriver");

(async function example(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
    await driver.findElement(By.id("inputEmail3")).click();
    await driver.findElement(By.id("inputEmail3")).sendKeys('adam');
    await driver.findElement(By.id("inputPassword3")).click();
    await driver.findElement(By.id("inputPassword3")).sendKeys('kowalski');
    await driver.findElement(By.id("dataU")).click();
    await driver.findElement(By.id("dataU")).sendKeys('01-01-2011 ');
    await driver.findElement(By.xpath("//button[@type='button']")).click();
    await driver.wait(until.alertIsPresent());
    let alert1 = await driver.switchTo().alert();
    await alert1.accept();
    await driver.wait(until.alertIsPresent());
    let alert2 = await driver.switchTo().alert();
    let alertText = await alert2.getText();
    await alert2.accept();
    if(alertText == "Brak kwalifikacji"){
        console.log("Passed");
    } else {
        console.log("Failed");
    }
    driver.quit();
})();


