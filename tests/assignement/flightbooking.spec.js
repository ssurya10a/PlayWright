import {test} from '@playwright/test';
import { flipkartflight } from '../../POM_Pages/flipkartflight'

test('flight booking', async({browser}) => {
    const contex = await browser.newContext({permissions:[]});

    const page = await contex.newPage()

    const flightbook = new flipkartflight(page)

    await flightbook.booking()
})