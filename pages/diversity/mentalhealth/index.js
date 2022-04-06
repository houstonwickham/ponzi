import Head from 'next/head';
import { Container, Content, H1, P1, P2, P3 } from './MentalhealthElements';
const mentalhealth = () => {
  return (
    <>
      <Head>
        <title>ponzi | mental health</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container>
          <Content>
            <H1>Hey, it’s okay not to be okay</H1>
            <P1>
              We believe that sharing heals. By talking about mental health, and
              being open about our experiences, we can create a culture where no
              one suffers in silence.
            </P1>
            <P2>
              If someone’s not well in life, they’re unlikely to be well at
              work. And vice versa. We don’t want our people to hide behind a
              happy face – we want our culture to be a place where everyone
              feels like they can tell their manager and their team if they’re
              not okay. And get the support they need, without judgment.
            </P2>
            <P3>
              In 2018, we launched <i>ponzi cares</i>, our global mental health
              initiative. Through it, we’re working to create a safe stigma-free
              environment that is open and caring about mental health issues. We
              believe that everyone’s experiences of mental health - from
              illness to wellbeing - should be welcomed, respected, and
              championed. <i>ponzi cares</i> is how we’re making this happen.
            </P3>
          </Content>
        </Container>
      </main>
    </>
  );
};

export default mentalhealth;
