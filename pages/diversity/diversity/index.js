import Head from 'next/head';
import { Container, Content, H1, P1, P2, P3 } from './DiversityElements';
const diversity = () => {
  return (
    <>
      <Head>
        <title>ponzi | diversity</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container>
          <Content>
            <H1>Don’t just work here. Belong here.</H1>
            <P1>
              You are welcome at ponzi for who you are, no matter where you come
              from, what you look like, or what financial crimes you may have
              been accused of.
            </P1>
            <P2>
              Our platform is for everyone, and so is our workplace. The more
              voices we have represented and amplified in our business, the more
              we will all steal, thrive and be brilliant.
            </P2>
            <P3>
              So bring us your personal experience, your perspectives, and your
              background. It’s in our differences that we will find the power to
              keep revolutionizing the way the world loses their money.
            </P3>
          </Content>
        </Container>
      </main>
    </>
  );
};

export default diversity;