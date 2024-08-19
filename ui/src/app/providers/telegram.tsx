import { createContext, FC, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from '@gravity-ui/uikit';
import { useThemeParams, WebAppProvider } from '@vkruglikov/react-telegram-web-app';
import { Children } from 'app/types';
import { IWebApp, ITelegramContext } from 'shared/types';

export const TelegramContext = createContext<ITelegramContext>({});

export const TelegramProvider: FC<Children> = ({ children }) => {
  const [colorScheme, themeParams] = useThemeParams();
  const [webApp, setWebApp] = useState<IWebApp | null>(null);

  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;
    if (app) {
      app.ready();
      app.expand();
      setWebApp(app);
    }
  }, []);

  const value = useMemo(() => {
    return webApp
      ? {
        webApp,
        unsafeData: webApp.initDataUnsafe,
        user: webApp.initDataUnsafe.user,
      }
      : {};
  }, [webApp]);

  return (
    <TelegramContext.Provider value={value}>
      <WebAppProvider
        options={{
          smoothButtonsTransition: true
        }}
      >
        <ThemeProvider theme={'dark'}>
          {children}
        </ThemeProvider>
      </WebAppProvider>
    </TelegramContext.Provider>
  );
};
