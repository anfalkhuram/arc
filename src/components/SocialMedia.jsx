import { motion } from 'framer-motion';

const TikTokIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YouTubeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 7.1C2.5 7.1 2.2 9.5 2 12c.2 2.5.5 4.9.5 4.9C3.1 18.5 4.6 19 8.5 19.3c1.7.1 3.5.1 5.2.1 1.7 0 3.5 0 5.2-.1 3.9-.3 5.4-.8 6-2.4 0 0 .3-2.4.5-4.9-.2-2.5-.5-4.9-.5-4.9C24.3 5.5 22.8 5 18.9 4.7 17.2 4.6 15.5 4.6 13.7 4.6c-1.7 0-3.5 0-5.2.1-3.9.3-5.4.8-6 2.4z"/>
    <path d="M9.7 15.5l6.4-3.5-6.4-3.5z"/>
  </svg>
);

const socialLinks = [
  { name: 'TikTok',    icon: <TikTokIcon    className="w-7 h-7" />, href: 'https://www.tiktok.com/@join.arc' },
  { name: 'Instagram', icon: <InstagramIcon className="w-7 h-7" />, href: 'https://www.instagram.com/join.arc' },
  { name: 'Facebook',  icon: <FacebookIcon  className="w-7 h-7" />, href: 'https://www.facebook.com/people/AbdulRehman-Cheema/61576562944636/' },
  { name: 'YouTube',   icon: <YouTubeIcon   className="w-7 h-7" />, href: 'https://www.youtube.com/@join.arc.' },
];

export default function SocialMedia() {
  return (
    <section className="relative py-16 bg-[var(--neu-base)] overflow-hidden transition-colors duration-300">
      {/* Gold Glow Blobs using Theme Colors */}
      <div className="absolute top-[10%] left-[10%] w-[380px] h-[380px] bg-[var(--neu-accent)]/5 blur-[120px] rounded-full pointer-events-none transition-colors duration-300" />
      <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-[var(--neu-accent)]/5 blur-[100px] rounded-full pointer-events-none transition-colors duration-300" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-bold uppercase tracking-wider text-xs mb-4 text-[var(--neu-accent)] transition-colors duration-300">
            Reaching 1M+ people through educational content
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[var(--neu-text)] transition-colors duration-300">
            Learn For{' '}
            <span className="font-display text-[var(--neu-accent)] tracking-wider transition-colors duration-300">
              Free!
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[var(--neu-text-muted)] transition-colors duration-300">
            Join our community for daily reflections, lessons, and practical tips on Islamic psychology and mental well-being.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex flex-col items-center justify-center p-8 md:p-10 cursor-pointer bg-[var(--neu-card-bg)] border border-[var(--neu-border)] rounded-xl transition-all duration-300"
              whileHover={{ y: -6, scale: 1.03, borderColor: 'var(--neu-accent)' }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ textDecoration: 'none' }}
            >
              {/* Circular Icon Wrapper */}
              <div className="mb-4 p-4 rounded-full bg-[var(--neu-base)] border border-[var(--neu-border)] text-[var(--neu-accent)] shadow-md transition-colors duration-300">
                {social.icon}
              </div>
              <span className="font-bold text-[var(--neu-text)] transition-colors duration-300">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
