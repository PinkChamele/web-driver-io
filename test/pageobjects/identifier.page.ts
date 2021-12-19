import { ChainablePromiseElement } from 'webdriverio';
import AuthPage from './auth.page';

class IdentifierPage extends AuthPage {
    public get identifierInputField(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#identifierId');
    }

    public async inputIdentifier(username: string): Promise<void> {
        await this.identifierInputField.setValue(username);
        await this.btnNext.click();
    }

    public open(): Promise<string> {
        return super.open('signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin');
    }
}

export default new IdentifierPage();
