export default class Page {
    public open(path: string): Promise<string> {
        return browser.url(`https://accounts.google.com/${path}`)
    }
}
