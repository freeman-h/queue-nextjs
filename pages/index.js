import Head from 'next/head';
import Ticket from '../components/ticket';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Queue</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Ticket />
      </div>
    </div>
  );
}
