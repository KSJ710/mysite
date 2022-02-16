import type { AppProps /*, AppContext */ } from 'next/app';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Base from 'src/components/layout/Base';
import 'src/styles/global.scss';

// fasのFontAwesomeIconコンポネントを全体で使用できる下記参照
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
library.add(fab, fas);

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element {
  if (Component?.props?.layout === 'main') {
    return (
      <SessionProvider session={session}>
        <RecoilRoot>
          <Base>
            <Component {...pageProps} />
          </Base>
        </RecoilRoot>
      </SessionProvider>
    );
  } else {
    return (
      <SessionProvider session={session}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    );
  }
}
