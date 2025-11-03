import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface MagicLinkEmailProps {
  /** The user's email address */
  email: string;
  /** The magic link URL */
  url: string;
  /** The company name to display */
  companyName?: string;
  /** The number of minutes the link is valid for */
  expiresInMinutes?: number;
}

// Styles for the email
const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  maxWidth: '100%',
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '48px',
  marginBottom: '20px',
  color: '#1a1a1a',
  lineHeight: '1.3',
};

const text = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#333',
};

// A specific style for the email address text
const emailText = {
  ...text,
  color: '#000',
  fontWeight: 'bold' as const,
  margin: '16px 0',
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#000000',
  borderRadius: '4px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 20px',
  width: '100%',
};

const hr = {
  borderColor: '#e6e6e6',
  margin: '20px 0',
};

const footer = {
  color: '#888888',
  fontSize: '12px',
  lineHeight: '24px',
};

/**
 * A beautiful, minimalist, and professional magic link email template.
 * Adapted to use email address instead of first name.
 */
export function MagicLinkEmail({
  email,
  url,
  companyName = 'Your Company',
  expiresInMinutes = 10, // You can set a default expiry time
}: MagicLinkEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Sign in to {companyName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={{ ...text, fontSize: '20px', fontWeight: 'bold' }}>
            {companyName}
          </Text>

          <Heading style={heading}>Sign in to your account</Heading>

          <Text style={text}>
            You requested a magic link to sign in to {companyName} for the
            following email address:
          </Text>

          {/* Display the email address receiving the link */}
          <Text style={emailText}>{email}</Text>

          <Text style={text}>
            Click the button below to sign in. This link is valid for the
            next {expiresInMinutes} minutes.
          </Text>

          {/* The Call-to-Action Button */}
          <Section style={{ marginTop: '32px', marginBottom: '32px' }}>
            <Button style={button} href={url}>
              Sign In
            </Button>
          </Section>

          <Text style={text}>
            If you did not request this email, you can safely ignore it.
          </Text>

          <Hr style={hr} />

          {/* Footer */}
          <Text style={footer}>
            © {new Date().getFullYear()} {companyName}, Inc.
          </Text>
          <Text style={footer}>123 Main Street, Anytown, USA 12345</Text>
        </Container>
      </Body>
    </Html>
  );
}

export default MagicLinkEmail;
