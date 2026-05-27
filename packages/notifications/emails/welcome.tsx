import { EmailHeader, EmailFooter, styles, Logo, SignOff } from './components';
import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';

const WelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>Welcome to your links page</Preview>
    <Tailwind>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Logo />
          <EmailHeader
            title="Welcome!"
            subtitle="Your personal links page is ready"
          />

          <Section>
            <Text style={styles.paragraph}>Thanks for signing up!</Text>

            <Text style={styles.paragraph}>
              Your personal links page is ready. Here are some recommended
              first steps:
            </Text>

            <ul style={styles.list}>
              <li style={styles.listItem}>
                Set up your page with blocks and integrations
              </li>
              <li style={styles.listItem}>
                Customize your theme and layout
              </li>
              <li style={styles.listItem}>Share your page on your socials!</li>
            </ul>

            <Text style={styles.paragraph}>
              If you have any questions or feedback, feel free to reply to this
              email!
            </Text>

            <SignOff />
          </Section>

          <EmailFooter />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default WelcomeEmail;
