import Head from 'next/head';
import {
  Container,
  Content,
  H1,
  P1,
} from '../../../components/styled/SigninElements';

const signin = () => {
  return (
    <>
      <Head>
        <title>ponzi | sign in</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container>
          <Content>
            <H1>Sign in coming soon!</H1>
            <P1>
              It is very important to us that you are able to sign in and give
              us your money!
            </P1>
          </Content>
        </Container>
      </main>
    </>
  );
};

export default signin;
