import { ChainablePromiseElement } from 'webdriverio';

import AuthPage from './auth.page';

class IdentifierPage extends AuthPage {
    public get passwordInputField(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('[name="password"]');
    }

    public async inputPassword(password: string): Promise<void> {
        await this.passwordInputField.setValue(password);
        await this.btnNext.click();
    }
}

export default new IdentifierPage();
