import Head from "next/head";
import Link from "next/link";

import axios from "src/configs/axios";

import Circle from "public/images/circle.svg";

function Home(props) {
  console.log(props);
  return (
    <div className="container mx-auto">
      <Head>
        <title>Codepedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="pt-10">
          <Circle className="absolute left-0 bottom-0"></Circle>
        </section>
      </main>
    </div>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/article`);
    return data;
  } catch (error) {
    return error;
  }
};

export default Home;
