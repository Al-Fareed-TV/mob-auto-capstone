import { expect } from '@wdio/globals'
import LaunchScreen from '../screens/Launch.screen'

describe('App Launch Smoke Test', () => {
    const LaunchScreenInstance = LaunchScreen.getInstance()
    it('testing', async () => {

        // Wait until Appium reports a running activity
        await driver.waitUntil(async () => {
            const activity = await driver.getCurrentActivity()
            return activity.includes('MainActivity')
        }, {
            timeout: 20000,
            timeoutMsg: 'App did not launch'
        })

        const currentPackage = await driver.getCurrentPackage()

        console.log('Current package:', currentPackage)

        // Validate app opened
        expect(currentPackage).toContain('com.viditec.kulu.qa')
        await LaunchScreenInstance.clickJoinButton();
        await LaunchScreenInstance.clickAllowButton();
        await LaunchScreenInstance.clickAllowGeoButton();
        await LaunchScreenInstance.clickWhileUsingAppButton();
        await browser.pause(4000);
    })
})
