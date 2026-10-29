import { motion } from 'framer-motion';

export default function WhyCounseling() {
  return (
    <section id="why-counseling" className="py-16 bg-[var(--neu-base)] transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          className="text-center space-y-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--neu-text)] transition-colors duration-300">
            Why Do I Need{' '}
            <span className="font-display text-[var(--neu-accent)] tracking-wider transition-colors duration-300">
              Counselling
            </span>
            ?
          </h2>
          <p className="text-lg text-[var(--neu-text-muted)] transition-colors duration-300 text-left md:text-center">
            &ldquo;Even the prophet Muhammad (ﷺ), The Greatest Mind ever, was commanded by Allah to seek Consultation. The Qur'an says: &ldquo;Washawirhum fil amr&rdquo; - meaning &ldquo;And consult them in matters.&rdquo;&rdquo;
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Quran Verse — flat-accent-card — clean and highly legible */}
          <motion.div
            className="flat-accent-card p-8 md:p-10 relative bg-[var(--neu-card-bg)] border border-[var(--neu-border)] border-l-4 border-l-[var(--neu-accent)] rounded-xl transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <p className="text-xs font-bold uppercase tracking-widest mb-5 text-[var(--neu-accent)] transition-colors duration-300">
              Quranic Verse
            </p>
            {/* Arabic Text block */}
            <div className="text-right mb-6">
              {/* [VERIFY WITH CLIENT] - Arabic text accuracy and rendering for Surah Aal-Imran 3:159 */}
              <p className="font-arabic text-3xl md:text-4xl leading-loose text-[var(--neu-text)] font-semibold transition-colors duration-300" dir="rtl">
                وَشَاوِرْهُمْ فِي الْأَمْرِ
              </p>
            </div>
            {/* Translation and citation block */}
            <div className="text-left space-y-3">
              {/* [VERIFY WITH CLIENT] - English translation accuracy for Surah Aal-Imran 3:159 */}
              <p className="text-sm md:text-lg font-small leading-relaxed text-[var(--neu-text)] transition-colors duration-300">
                &ldquo;And Consult them in matters.&rdquo;
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--neu-accent)] transition-colors duration-300">
                — Surah Aal-Imran 3:159
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
