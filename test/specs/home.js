
describe("Browser Commands ", () => {
  it("newWindow example ", async() => {
          await browser.url("https://sandbox.akira.md/szyslak/");

                console.log(browser.getTitle());
        
          await $('//input[@id="credentials-email"]').setValue('muhammad+test1@akira.md');
          await $('//input[@id="credentials-password"]').setValue('Tester123456#');
          await $('//button[@id="credentials-submit"]').click();
                  
        
          
          //Assert the URL_Text
          await expect(browser).toHaveUrlContaining('home');

          //Assertion
          //Find Heading Element
          const headingE = await $('//header//h1');

          //get Text
          const headingT = await headingE.getText();
          //Assert the Text
          await expect(headingT).toEqual('Welcome to TELUS Health Virtual Care');
  });
});






