import IdentifierPage from  '../pageobjects/identifier.page';
import PasswordPage from '../pageobjects/password.page';
import AccountPage from '../pageobjects/account.page';

describe('Sign in gmail', () => {
    it('should sing in gmail with valid credentials', async () => {
        await IdentifierPage.open();

        await IdentifierPage.inputIdentifier(process.env.EMAIL);
        await PasswordPage.inputPassword(process.env.PASSWORD);
        await expect(await AccountPage.welcomeHeader).toBeExisting();
    });
});


