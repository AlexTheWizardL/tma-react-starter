import {
  setDebug,
  themeParams,
  initData,
  viewport,
  init as initSDK,
  miniApp,
  backButton,
} from '@tma.js/sdk-react';

/**
 * Initializes the Telegram Mini App SDK.
 */
export async function init(options: {
  debug: boolean;
  eruda: boolean;
}): Promise<void> {
  setDebug(options.debug);
  initSDK();

  // Add Eruda mobile console if needed
  if (options.eruda) {
    import('eruda').then(({ default: eruda }) => {
      eruda.init();
      eruda.position({ x: window.innerWidth - 50, y: 0 });
    });
  }

  // Mount SDK components
  backButton.mount.ifAvailable();
  initData.restore();

  if (miniApp.mount.isAvailable()) {
    themeParams.mount();
    miniApp.mount();
    themeParams.bindCssVars();
  }

  if (viewport.mount.isAvailable()) {
    viewport.mount().then(() => {
      viewport.bindCssVars();
    });
  }
}
