import { expect } from '@wdio/globals'

describe('App Launch Smoke Test', () => {
    it('should launch the Kulu app', async () => {

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
    })
})
