import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

export default class AuthPage extends Page {
    public get btnNext(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b');
    }
}
