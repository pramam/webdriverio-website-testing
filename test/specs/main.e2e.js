describe('Main Page', ()=>{
    it('Verify list items', ()=>{
        browser.url('https://the-internet.herokuapp.com/');
        // browser.url('/');
        const listExamples = $$('ul li') // find all the elements of li

        expect(listExamples).toBeElementsArrayOfSize({gte: 1});
        expect(listExamples).toBeElementsArrayOfSize(45);

    })
})