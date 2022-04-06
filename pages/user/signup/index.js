import Head from 'next/head';
import { Container, Content, H1, P1 } from './SignupElements';

const signup = () => {
  return (
    <>
      <Head>
        <title>ponzi | sign up</title>
        <meta name='description' content='ponzi financial' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container>
          <Content>
            <H1>Sign up coming soon!</H1>
            <P1>How are you going to give us money if you can&apos;t join?</P1>
          </Content>
        </Container>
      </main>
    </>
  );
};

export default signup;
