import LoginView from '../pages/login';
import { checkUserAuthentication } from '../utils/auth';

export default function CheckAuth({ children }: { children: React.JSX.Element }) {
	const status  = checkUserAuthentication();

	if (status === false) {
		return <LoginView />;
	}

	return children;
}
