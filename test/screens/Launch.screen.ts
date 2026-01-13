import BaseScreen from "./Base.screen";

export default class LaunchScreen extends BaseScreen{
    private static instance: LaunchScreen;
    private locators = {
            joinButton: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.Button',
            allowButton: '//android.widget.Button[@text="Allow"]',
            allowGeoButton: 'android.widget.Button[@text="Allow Geolocation"]',
            whileUsingAppButton: 'android.widget.Button[@text="While using the app"]',
        }

    private constructor() {
        super();
    }

    public static getInstance(): LaunchScreen {
        if (!LaunchScreen.instance) {
            LaunchScreen.instance = new LaunchScreen();
        }
        return LaunchScreen.instance;
    }

    async clickJoinButton(): Promise<void> {
       await this.click(this.locators.joinButton);
    }
    async clickAllowButton(): Promise<void> {
        await this.click(this.locators.allowButton);
    }

    async clickAllowGeoButton(): Promise<void> {
        await this.click(this.locators.allowGeoButton);
    }

    async clickWhileUsingAppButton(): Promise<void> {
        await this.click(this.locators.whileUsingAppButton);
    }

}