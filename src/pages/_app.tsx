import { AppProps } from 'next/app';
import Head from 'next/head';
import { NextPage } from 'next';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import CheckAuth from '../components/CheckAuth';
import { App } from 'antd';
import 'antd/dist/reset.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/zh-tw';
import { localeWordingConfig } from '../constant/dayjs';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.locale('zh-tw');
dayjs.updateLocale('zh-tw', localeWordingConfig);

type Page<P = {}> = NextPage<P> & {
	getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
	Component: Page;
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: Props) {
	const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

	return (
		<>
			<Head>
				<link rel="shortcut icon" href="" />
				<title>Todo-list by Paul</title>
			</Head>
			<SessionProvider session={session}>
				<App>
					<CheckAuth>
						<>
							{/* {contextHolder} */}
							{getLayout(<Component {...pageProps} />)}
						</>
					</CheckAuth>
				</App>
			</SessionProvider>
		</>
	);
}

export default MyApp;
