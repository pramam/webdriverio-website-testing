describe('Dynamic Loading Page', ()=>{
    it('Wait for the hidden element to show', async ()=>{
        const startBtn = await $("#start button");
        const textFinish = await $("#finish h4");
        const loading = await $("#loading");

        await browser.url('/dynamic_loading/1');
        await startBtn.click();

        // await browser.pause(5000);

        // Wait for loading element to display
        await loading.waitForDisplayed();

        // Wait for loading element to go away, it gets display:none internally
        await loading.waitForDisplayed({reverse: true});

        // Wait for the finish element to display
        await textFinish.waitForDisplayed();

        // Check text of finish element
        expect(await textFinish.getText()).toEqual("Hello World!");
    })
})