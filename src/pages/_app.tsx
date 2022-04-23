import type { AppProps /*, AppContext */ } from 'next/app';
import { RecoilRoot } from 'recoil';
import { SessionProvider, useSession } from 'next-auth/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Base from 'src/components/layout/Base';
import Load from 'src/components/common/Load';
import 'src/styles/global.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// fasのFontAwesomeIconコンポネントを全体で使用できる下記参照
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
library.add(fab, fas);

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element {
  const router = useRouter();
  const [loadState, setLoadState] = useState(false);
  useLoadEvent(router, setLoadState);

  const ComponentPageProps = () => {
    if (loadState) {
      return <Load />;
    } else {
      return <Component {...pageProps} />;
    }
  };

  if (Component?.props?.auth && Component?.props?.layout === 'main') {
    return (
      <SessionProvider {...session}>
        <RecoilRoot>
          <Auth>
            <Base>
              <ComponentPageProps />
            </Base>
          </Auth>
        </RecoilRoot>
      </SessionProvider>
    );
  } else if (Component?.props?.layout === 'main') {
    return (
      <SessionProvider {...session}>
        <RecoilRoot>
          <Base>
            <ComponentPageProps />
          </Base>
        </RecoilRoot>
      </SessionProvider>
    );
  } else {
    return (
      <SessionProvider {...session}>
        <RecoilRoot>
          <ComponentPageProps />
        </RecoilRoot>
      </SessionProvider>
    );
  }
}

function Auth({ children }) {
  const { data: session, status } = useSession({ required: true });
  const isUser = session?.user;

  if (isUser) {
    return children;
  }
  return <Load />;
}

function useLoadEvent(router, setLoadState) {
  useEffect(() => {
    const loadOn = () => {
      setLoadState(true);
    };
    const loadOff = () => {
      setLoadState(false);
    };

    router.events.on('routeChangeStart', loadOn);
    router.events.on('routeChangeComplete', loadOff);
    router.events.on('routeChangeError', loadOff);

    return () => {
      router.events.off('routeChangeStart', loadOn);
      router.events.off('routeChangeComplete', loadOff);
      router.events.off('routeChangeError', loadOff);
    };
  });
}
