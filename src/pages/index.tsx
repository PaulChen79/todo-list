import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
	const route = useRouter();

	useEffect(() => {
		route.push('/todos');
	}, [route]);

	return <></>;
};

export default Index;
