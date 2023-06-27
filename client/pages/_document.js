import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google console */}
        <meta
          name="google-site-verification"
          content="MDrnSZIfnlUSB2wDuhYFwx5zS6bjf-5utJ2AqLFqtX8"
        />
        <meta
          name="description"
          content="Discover the latest cinema news, movie reviews, and behind-the-scenes insights at Ethcinemanation. Stay updated with the world of cinema and explore a wide range of film-related content."
        />
        <meta
          name="keywords"
          content="cinema, movies, blockchain, ethereum, film, reviews, news, behind the scenes, entertainment"
        />
        <meta name="author" content="Ethcinemanation" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.ethcinemanation.com/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
