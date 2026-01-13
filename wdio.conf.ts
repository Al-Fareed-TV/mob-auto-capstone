import type { Options } from '@wdio/types'

export const config = {
    runner: 'local',
    port: 4723,

    specs: ['./test/specs/**/*.ts'],
    maxInstances: 1,

    capabilities: [
        {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Pixel_6',
            'appium:platformVersion': '14',
            'appium:app': './apps/app-debug.apk',
            'appium:appPackage': 'com.company.myapp',
            'appium:appActivity': 'com.company.myapp.MainActivity',
            'appium:noReset': false,
            'appium:newCommandTimeout': 300
        }
    ],

    logLevel: 'info',

    framework: 'mocha',
    reporters: ['spec'],

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
