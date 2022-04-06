import Head from 'next/head';
import { Container, Content, H1, P1, P2, P3 } from './FaqElements';
const faq = () => {
  return (
    <>
      <Head>
        <title>ponzi | faq</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container>
          <Content>
            <H1>Frequently Asked Questions</H1>
            <P1>
              Q: What do you do at ponzi?
              <br />
              A: We take money, and we move it around
            </P1>
            <P2>
              Q: Where are you located?
              <br />
              A: On some tropical island somewhere to avoid legal troubles.
            </P2>
            <P3>
              Q: How do I get my money back?
              <br />
              A: Depends on when you jumped in on the process. Probably never.
            </P3>
          </Content>
        </Container>
      </main>
    </>
  );
};

export default faq;
