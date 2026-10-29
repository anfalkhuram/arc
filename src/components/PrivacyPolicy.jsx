import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Navbar from './Navbar';

const SECTIONS = [
  {
    title: 'Information We Collect',
    subsections: [
      {
        heading: '1. Information You Voluntarily Provide',
        body: 'When you interact with our website — such as by leaving comments, subscribing to newsletters, contacting us, or creating an account — we may collect your name, email address, website URL (if provided), and any information you submit through forms or comments.',
      },
      {
        heading: '2. Automatically Collected Information',
        body: 'When you visit our website, certain information may be collected automatically, including your IP address, browser type and version, device type, operating system, referring website, pages visited, date and time of visit, and cookies and usage data.',
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    body: 'We use collected information for purposes including: operating and maintaining our website; improving website performance and user experience; responding to comments or inquiries; sending newsletters or updates (if subscribed); monitoring and preventing spam, fraud, or unauthorized activity; analyzing website traffic and trends; and complying with legal obligations.',
  },
  {
    title: 'Cookies',
    body: 'Our website may use cookies and similar technologies to remember user preferences, improve website functionality, analyze visitor behavior, and enhance security. You may choose to disable cookies through your browser settings, though some website features may not function properly.',
  },
  {
    title: 'Comments',
    body: 'When visitors leave comments on our website, we collect the data shown in the comments form, along with the visitor\'s IP address and browser user agent string to help detect spam. An anonymized string created from your email address may be provided to third-party services such as Gravatar to display profile images associated with comments.',
  },
  {
    title: 'Media Uploads',
    body: 'If you upload images to the website, please avoid uploading images with embedded location data (EXIF GPS), as visitors may be able to extract location data from uploaded images.',
  },
  {
    title: 'Third-Party Services',
    body: 'We may use trusted third-party services to support website operations, such as web hosting providers, spam detection services, analytics providers, email communication tools, and payment processors. These third parties may process data only as necessary to provide their services and according to their own privacy policies.',
  },
  {
    title: 'Payment Processing',
    body: 'If products or services are offered through our website, payments may be securely processed by third-party payment providers. We do not store or directly access your full payment card information. Payment processors handle payment data according to their own privacy and security standards.',
  },
  {
    title: 'Data Sharing and Disclosure',
    body: 'We do not sell or rent your personal information. We may share information only: with service providers who assist in website operations; to comply with legal obligations; to protect our rights, users, or website security; or in connection with business transfers or mergers, if applicable.',
  },
  {
    title: 'Data Retention',
    body: 'We retain personal data only as long as necessary for operational, legal, or security purposes. Comments and related metadata may be stored indefinitely to help with moderation and follow-up recognition.',
  },
  {
    title: 'Your Rights',
    body: 'Depending on your location, you may have rights to request access to your personal data, correct inaccurate information, request deletion of your data, or withdraw consent for certain communications. To exercise these rights, please contact us through our Contact Page.',
  },
  {
    title: 'Security Measures',
    body: 'We implement reasonable security practices to protect your information, including SSL/HTTPS encryption, secure hosting environments, restricted administrative access, and spam and malware monitoring. While we strive to protect your data, no online platform can guarantee absolute security.',
  },
  {
    title: 'External Links',
    body: 'Our website may contain links to external websites. We are not responsible for the privacy practices, content, or policies of third-party websites.',
  },
  {
    title: "Children's Privacy",
    body: 'Our website is not intended for children under 13, and we do not knowingly collect personal information from children.',
  },
  {
    title: 'Changes to This Privacy Policy',
    body: 'We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. Continued use of the website after updates indicates acceptance of the revised policy.',
  },
  {
    title: 'Contact Us',
    body: 'If you have questions about this Privacy Policy, please reach out via our Contact page or visit: https://abdulrehmancheema.com/',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: 'easeOut' },
  }),
};

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Privacy Policy — Abdul Rehman Cheema (ARC)";
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[var(--neu-base)] text-[var(--neu-text)] transition-colors duration-300">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 mb-10 text-sm font-semibold transition-colors duration-300 text-[var(--neu-text-muted)] hover:text-[var(--neu-accent)] cursor-pointer bg-transparent border-none"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--neu-accent)]/10 border border-[var(--neu-accent)]/30 mb-6">
            <ShieldCheck className="w-8 h-8 text-[var(--neu-accent)]" />
          </div>
          <span className="block text-xs font-bold uppercase tracking-widest text-[var(--neu-accent)] mb-3">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--neu-text)] leading-tight mb-4">
            Privacy{' '}
            <span className="font-display text-[var(--neu-accent)] tracking-wider">
              Policy
            </span>
          </h1>
          <p className="text-sm text-[var(--neu-text-muted)] max-w-lg mx-auto leading-relaxed">
            At <strong className="text-[var(--neu-text)]">abdulrehmancheema.com</strong>, we value your privacy and are committed to protecting your personal information. This policy explains what we collect, how we use it, and how we keep it safe.
          </p>
          <p className="text-xs text-[var(--neu-text-faint)] mt-4">
            Website: <a href="https://abdulrehmancheema.com/" className="text-[var(--neu-accent)] hover:underline" target="_blank" rel="noreferrer">https://abdulrehmancheema.com/</a>
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-4">
          {SECTIONS.map((section, i) => (
            <motion.div
              key={section.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="p-6 rounded-xl bg-[var(--neu-card-bg)] border border-[var(--neu-border)] transition-colors duration-300"
            >
              <h2 className="text-base font-bold text-[var(--neu-text)] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-[var(--neu-accent)] flex-shrink-0" />
                {section.title}
              </h2>

              {section.subsections ? (
                <div className="space-y-4">
                  {section.subsections.map((sub) => (
                    <div key={sub.heading}>
                      <h3 className="text-sm font-semibold text-[var(--neu-text)] mb-1">
                        {sub.heading}
                      </h3>
                      <p className="text-sm text-[var(--neu-text-muted)] leading-relaxed">
                        {sub.body}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[var(--neu-text-muted)] leading-relaxed">
                  {section.body}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-xs text-[var(--neu-text-faint)] mt-12"
        >
          Last updated: July 2026 &mdash; abdulrehmancheema.com
        </motion.p>

      </div>
    </div>
  );
}
