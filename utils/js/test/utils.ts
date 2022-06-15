/* tslint:disable: no-shadowed-variable */
import playwright, { chromium, webkit, firefox } from 'playwright';

import { TMethod } from '@amaui/models';

export type TType = 'chromium' | 'firefox' | 'webkit';

export type TPlaywrightJSHandle = playwright.JSHandle<any>;

export interface IOptions {
  browser?: playwright.LaunchOptions;
  context?: playwright.BrowserContextOptions;
  page?: playwright.Page;
}

export interface IBrowser {
  browser?: playwright.Browser;
  context?: playwright.BrowserContext;
  page?: playwright.Page;
}

export interface IBrowsers<T = IBrowser> {
  chromium?: T;
  firefox?: T;
  webkit?: T;
}

export const startBrowser = (
  type: TType = 'chromium',
  options: IOptions = { context: { acceptDownloads: true } },
  open = ['browser', 'context', 'page']
): Promise<IBrowser> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result: {
        browser?: playwright.Browser;
        context?: playwright.BrowserContext;
        page?: playwright.Page;
      } = {};

      let browser = chromium;

      if (type === 'firefox') browser = firefox;
      if (type === 'webkit') browser = webkit;

      result['browser'] = await browser.launch(options.browser);

      if (open.indexOf('context') > -1) result['context'] = await result['browser'].newContext(options.context);

      // Add permissions to the context
      await result['context']?.grantPermissions([]);

      if (open.indexOf('page') > -1) {
        result['page'] = await result['context']?.newPage();

        // So we don't get empty html page
        await result['page']?.goto(`http://localhost:4000?q=a`);
      }

      return resolve(result);
    }
    catch (error) {
      console.error(error);

      throw error;
    }
  });
};

export const startBrowsers = (browsers: IBrowsers<boolean> = { chromium: true, firefox: true, webkit: true }, options?: IOptions): Promise<IBrowsers> => {
  return new Promise(async (resolve, reject) => {
    const result: IBrowsers = {};

    for (const browser of Object.keys(browsers).filter(item => browsers[item])) {
      result[browser] = await startBrowser((browser as TType), options);
    }

    return resolve(result);
  });
};

export const page = async (method: (page: playwright.Page) => any, browsers: IBrowsers): Promise<any> => {
  if (browsers && method) {
    for (const key of Object.keys(browsers)) {
      const browser = browsers[key] as IBrowser;

      if (browser.page) await method(browser.page);
    }
  }
};

// Evaluate run in all browsers
interface IEvaluateOptions {
  browsers?: IBrowsers;
  pre?: TMethod;
  post?: TMethod;
  arguments?: any[];
}

export const evaluate = async (
  method: TMethod,
  options: IEvaluateOptions = {}
): Promise<any> => {
  const responses: any = [];

  for (const key of Object.keys(options.browsers || {})) {
    const browser: IBrowser = options.browsers && options.browsers[key];

    const window = await browser.page?.evaluateHandle(() => window);

    const args = options.arguments?.length ? [window, ...options.arguments] : window;

    if (options.pre) await browser.page?.evaluateHandle(options.pre, args);

    const response = await browser.page?.evaluateHandle(method, args);

    if (options.post) await browser.page?.evaluateHandle(options.post, args);

    responses.push(await response?.jsonValue());

    // Clean up
    await window.dispose();
  }

  return responses;
};

// Evaluate run in all browsers and nodejs
export const evaluateAll = async (
  method: TMethod,
  options: IEvaluateOptions = {}
): Promise<any> => {
  return [
    await method(),
    ...await evaluate(method, options),
  ];
};

export const closeBrowser = async (browser: IBrowser, name?: string): Promise<void> => {
  if (browser?.browser) {
    await browser.browser.close();
  }
};

export const closeBrowsers = async (browsers: IBrowsers): Promise<void> => {
  if (browsers) for (const browser of Object.keys(browsers)) await closeBrowser(browsers[browser], browser);
};
