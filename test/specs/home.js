
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






/*
describe("Home", () =>{
it("Open URL & Pause" , () => {
  
  browser.url('https://sandbox.akira.md/szyslak/');
  browser.pause(500000);
  //browser.setValue('input[id="credentials-email"]', 'muhammad+test2@akira.md');
  //browser.setValue('input[name="password"]', 'Tester123456#');
 // browser.click('.button=Sign in');

});
});



/*describe("Home", () =>{
it("Open URL" , () => {

    browser.url('https://sandbox.akira.md/szyslak');
    browser.pause(50000);
    console.log(browser.getTitle());
    const search = ('//input[id="credentials-email"]');
    search.setValue('muhammad+test1@akira.md');
   
 });
  }); */
