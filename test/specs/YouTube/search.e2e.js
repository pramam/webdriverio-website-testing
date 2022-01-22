describe("Testing Search functionality on a specific video", ()=>{

    it("TC_Search_1a: Test if search term brings up results", async ()=>{
        await browser.url("https://www.youtube.com");
        
        const elInput = await $('input[id="search"]')

        await elInput.setValue("Yuval Noah Harari");
        await browser.pause(1000);
        await elInput.keys("\uE007")
        console.log (await elInput.getValue());
        //Wait to see the results show up in the browser
        await browser.pause(5000);      
    })
})