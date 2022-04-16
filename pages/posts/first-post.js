import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
export default function FirtsPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log("script loaded correctly, window.FB has been populated")
        }
      /> */}
      <h1>Firts post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/images/psico.jpg"
        height={180}
        width={180}
        alt="Psico image"
      />
    </Layout>
  );
}
