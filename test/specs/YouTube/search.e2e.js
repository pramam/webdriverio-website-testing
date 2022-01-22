describe("Testing Search functionality on a specific video", ()=>{

    it("TC_Search_1: Test if search term brings up expected video on first page", async ()=>{
        await browser.url("https://www.youtube.com");
        
        const elInput = await $('input[id="search"]')

        await elInput.setValue("Yuval Noah Harari");
        
        // This is just to see it visually in action
        await browser.pause(1000);
        await elInput.keys("\uE007");

        console.log (await elInput.getValue());

        //Wait to see the results show up in the browser
        await browser.pause(5000);     

        const elSearchedVideo = await $('a[title="Yuval Noah Harari on The Future of Humanity"]');
        await elSearchedVideo.click();
        
        //Wait to see the results show up in the browser
        await browser.pause(5000);

        expect(await browser.getUrl()).toEqual("https://www.youtube.com/watch?v=umnMHQPYEmA");
        // console.log(await browser.getUrl().getText());
    })

    it("TC_Search_4: Test if Search Term's video result takes you to the video on clicking the title of the video", async ()=>{
        await browser.url("https://www.youtube.com");
        
        const elInput = await $('input[id="search"]')

        await elInput.setValue("Yuval Noah Harari");
        
        // This is just to see it visually in action
        await browser.pause(1000);
        await elInput.keys("\uE007");

        console.log (await elInput.getValue());

        //Wait to see the results show up in the browser
        await browser.pause(5000);     

        const elSearchedVideo = await $('yt-formatted-string=Yuval Noah Harari on The Future of Humanity');
        await elSearchedVideo.click();

        //Wait to see the results show up in the browser
        await browser.pause(5000);

        expect(await browser.getUrl()).toEqual("https://www.youtube.com/watch?v=umnMHQPYEmA");  
    })
})

describe("Testing that a video is not found on wrong search", ()=>{
    it("TC_Search_2: Test if typing search terms not related to the subject brings up the subject", async()=>{
        await browser.url("https://www.youtube.com");
        
        const elInput = await $('input[id="search"]')

        await elInput.setValue("Harare");
        
        // This is just to see it visually in action
        await browser.pause(1000);
        await elInput.keys("\uE007");

        const elFindVideo = await $('yt-formatted-string=Yuval Noah Harari on The Future of Humanity');

        // Wait for the browser to load results
        await browser.pause(5000);
        
        // Note: WebdriverIO will not wait for the element to exist to execute this command
        let isExisting = await elFindVideo.isExisting();

        expect(isExisting).toEqual(false);
    })
})