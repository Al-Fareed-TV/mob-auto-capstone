import type { Options } from '@wdio/types'

export const config = {
    runner: 'local',
    port: 4723,

    specs: ['./test/specs/**/*.ts'],
    maxInstances: 1,

    capabilities: [
        {
            "appium:platformName": "Android",
            'appium:automationName': 'UiAutomator2',
            'appium:platformVersion': '15',
            'appium:app': '/Users/testvagrant/Documents/mob-auto-capstone/apps/app.apk',
            'appium:appPackage': 'com.viditec.kulu.qa',
            'appium:appActivity': 'com.robustrade.kulu.ui.MainActivity',
            'appium:noReset': false,
            'appium:udid': 'emulator-5554',
            'appium:newCommandTimeout': 300
        }
    ],

    logLevel: 'info',

    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    services: [
        ['appium', { args: { relaxedSecurity: true } }]
    ],

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json'
        }
    }
} as Options.Testrunner
