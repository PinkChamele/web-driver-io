import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class AccountPage extends Page {
    public get welcomeHeader(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $(`h1*=${process.env.USER_NAME}!`);
    }
}

export default new AccountPage();
