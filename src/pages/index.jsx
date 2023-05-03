import ToDo from '@/components/Home/ToDo/ToDo';
import PageSeo from '@/components/Layout/PageSeo';
import Head from 'next/head';

export default function Home() {
	return (
		<PageSeo title={'To do List'}>
			<ToDo/>
		</PageSeo>
	);
}
