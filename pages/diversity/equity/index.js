import Head from 'next/head';
import {
  Container,
  Content,
  H1,
  P1,
  P2,
  P3,
} from '../../../components/styled/EquityElements';
const equity = () => {
  return (
    <>
      <Head>
        <title>ponzi | racial equity</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container>
          <Content>
            <H1>Standing up and speaking out</H1>
            <P1>
              We’re working side by side with our Black community to help
              eradicate racial inequality and injustice.
            </P1>
            <P2>
              As a company, we’re collaborating across continents to drive
              systemic change for racial equality. We’ve accelerated our roadmap
              in response to the more recent trauma, injustices and pain
              experienced by the Black community, implementing a 5 part strategy
              to advance our racial equity and anti-racism efforts, both
              internally and on our platform. Strategy to be announced at a
              later date.
            </P2>
            <P3>
              We don’t simply want to reflect the world around us, we want to do
              better than what the world is currently showing us. With the power
              of our platform and brand, the commitment to our values and a
              unified mission, we hope to build trust and help to create and
              uphold a promising future for all Black people.
            </P3>
          </Content>
        </Container>
      </main>
    </>
  );
};

export default equity;
