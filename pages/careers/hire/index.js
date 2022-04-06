import Head from 'next/head';
import {
  Container,
  Content,
  H1,
  P1,
  P2,
  P3,
} from '../../../components/styled/HireElements';
const hire = () => {
  return (
    <>
      <Head>
        <title>ponzi | how we hire</title>
        <meta name='description' content='ponzi financial' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container>
          <Content>
            <H1>How We Hire</H1>
            <P1>
              We hire people who are good at what they do. But just as
              important, are a good match for us.
            </P1>
            <P2>
              At ponzi, what we value most is your character. Are you willing to
              look the other way when you notice something wrong? Do you care
              what happens to innocent people? Then ponzi might be the right fit
              for you.
            </P2>
            <P3>
              We’re an inclusive employer and this extends to how we hire. We
              strive to be inclusive at every stage of the hiring process, from
              the language we use in our job descriptions to the way we conduct
              our interviews. But in an effort to accelerate diverse hiring,
              we’ve put a number of people, strategies, and programs in place
              across the business.
            </P3>
          </Content>
        </Container>
      </main>
    </>
  );
};

export default hire;
