import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Search,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Calendar,
  MessageCircle,
  Monitor,
  User,
  FileText,
  Users,
  Play,
  X,
  Headphones,
  Laptop,
  Check
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CareerApplicationModal from './components/CareerApplicationModal';
import heroBg from './assets/cc-hero-image.webp';
import './career-counselling.css';

const WHY_CHOOSE_ITEMS = [
  {
    title: 'A Personalized Approach',
    desc: 'No generic formulas or standardized tests in isolation. Every session is customized to your background, personality, and personal aspirations.',
  },
  {
    title: 'Better Understanding of Strengths',
    desc: 'Uncover your distinctive cognitive patterns, hidden skills, and core motivators to match environments where you naturally excel.',
  },
  {
    title: 'Structured Exploration of Options',
    desc: 'Systematically analyze relevant industries, future job market trends, educational requirements, and realistic pathways without guesswork.',
  },
  {
    title: 'Practical Next Steps and Goal Setting',
    desc: 'Walk away with an actionable, step-by-step development roadmap with tangible milestones rather than abstract theory.',
  },
];

const FAQS = [
  {
    question: 'What is career counselling?',
    answer:
      'Career counselling is a structured, collaborative process where a counsellor helps you explore your interests, understand your unique strengths, and navigate choices regarding education, career transitions, and professional advancement.',
  },
  {
    question: 'Who can benefit from career counselling?',
    answer:
      'Anyone navigating a career decision can benefit: secondary and higher education students choosing study disciplines, fresh graduates entering the job market, experienced professionals seeking a career pivot, and anyone feeling stuck or uncertain about their direction.',
  },
  {
    question: 'What happens during a counselling session?',
    answer:
      'During your session, we discuss your current situation, background, skills, and aspirations. We explore potential roadblocks, evaluate viable industry paths, and collaborate on a realistic, personalized action plan to move forward.',
  },
  {
    question: 'Can career counselling help me choose between different career options?',
    answer:
      'Yes. If you are torn between two or more pathways, we use structured decision criteria—evaluating skill fit, industry growth, lifestyle balance, and personal values—to help you reach a confident, informed decision.',
  },
  {
    question: 'How can I arrange a counselling session?',
    answer:
      'You can schedule a session directly through our booking page by choosing a package and time that suits you. If you have preliminary questions, you can also reach out to us directly via WhatsApp.',
  },
];

const TESTIMONIAL_VIDEOS = [
  {
    id: 1,
    title: 'From Academic Confusion to a Clear Degree & Career Path',
    mentee: 'Student Mentee · University Applicant',
    tag: 'Academic Crossroads',
    duration: '1:45',
  },
  {
    id: 2,
    title: 'Navigating a Strategic Senior Role Transition with Confidence',
    mentee: 'Corporate Professional · Tech & Telecom',
    tag: 'Career Transition',
    duration: '2:15',
  },
  {
    id: 3,
    title: 'Breaking Free from Analysis Paralysis & Building an Action Plan',
    mentee: 'Fresh Graduate · Business Administration',
    tag: 'Early Career',
    duration: '1:58',
  },
];

export default function CareerCounsellingPage() {
  const location = useLocation();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('testimonials');
  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState({
    id: '45min-call',
    name: '45 Min Call',
    duration: '02 Online Sessions',
    fee: 'PKR 10,000/-',
    originalFee: 'PKR 20,000/-',
  });

  const handleOpenApplication = (plan) => {
    if (plan) setSelectedPlanForModal(plan);
    setIsApplicationModalOpen(true);
  };

  useEffect(() => {
    document.title = 'Career Counselling & Guidance — Abdul Rehman Cheema (ARC)';
    if (location.state?.scrollToHash) {
      const element = document.querySelector(location.state.scrollToHash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false);
        setSelectedTestimonialVideo(null);
        setIsApplicationModalOpen(false);
      }
    };
    if (isVideoModalOpen || selectedTestimonialVideo || isApplicationModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVideoModalOpen, selectedTestimonialVideo, isApplicationModalOpen]);

  const handleScrollToChooseYourPath = () => {
    const el = document.getElementById('choose-your-path') || document.getElementById('plans');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="career-counselling-page min-h-screen font-sans overflow-x-hidden pt-20 bg-[var(--neu-base)] text-[var(--neu-text)] transition-colors duration-300">
      <Navbar />

      {/* ============================================================
          SECTION 2: HERO SECTION (Faithful to ARC Mountain Reference)
          ============================================================ */}
      <section
        className="career-hero-container flex items-center relative"
        aria-label="Career Counselling Hero"
      >
        {/* Background Image with Person on Summit & Sunrise on Right */}
        <div
          className="career-hero-bg"
          style={{ backgroundImage: `url(${heroBg})` }}
          role="img"
          aria-label="Person standing on mountain summit at sunrise, looking toward distant peaks"
        />

        {/* Cinematic Dark Overlay for Text Readability */}
        <div className="career-hero-overlay" />

        {/* Subtle Bottom Fade to Site Base */}
        <div className="career-hero-bottom-fade" />

        {/* Hero Content Container */}
        <div className="container relative z-10 mx-auto px-6 md:px-12 py-16 md:py-20 lg:py-24">
          <div className="max-w-2xl text-left">
            {/* Small Introductory Line */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#E8C477]" />
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#E8C477]">
                Your Future Starts Here
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F7F7F4] leading-[1.08] mb-6 font-sans"
            >
              <span className="block font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-95 mb-1">
                From
              </span>
              <span className="block font-semibold">
                Confusion to{' '}
                <span className="career-hero-clarity font-bold">
                  Clarity
                </span>
              </span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#D9DDD7] leading-relaxed max-w-xl mb-8 font-normal"
            >
              A step-by-step career guidance program to help you discover your
              strengths, explore the right opportunities, make confident
              decisions, and build a meaningful future.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                type="button"
                onClick={handleScrollToChooseYourPath}
                className="career-btn-primary px-7 py-3.5 rounded-xl text-sm md:text-base font-bold flex items-center justify-center gap-2"
              >
                <span>Explore Our Program</span>
                <ArrowRight className="w-4 h-4" />
              </button>


            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION: CAREER MENTORSHIP PROGRAM (Faithful to Reference Mock)
          ============================================================ */}
      <section
        className="py-14 md:py-20 relative bg-[#0A0A0A] text-[#F7F7F4] transition-colors duration-300 border-b border-[#E8C477]/20"
        aria-label="Career Mentorship Program"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          {/* Section Heading with Gold Divider */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F7F7F4] font-sans">
              Career Mentorship Program
            </h2>
            <div className="w-14 h-1 bg-[#E8C477] rounded-full mx-auto mt-3" />
          </div>

          {/* Top Video Preview Card */}
          <div
            onClick={() => setIsVideoModalOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsVideoModalOpen(true);
              }
            }}
            aria-label="Watch Intro Video for Career Mentorship Program"
            className="group relative w-full h-72 sm:h-80 md:h-[380px] lg:h-[440px] rounded-2xl border border-[#E8C477]/40 hover:border-[#E8C477] overflow-hidden cursor-pointer shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center px-4"
            style={{
              backgroundImage: `linear-gradient(rgba(4, 23, 19, 0.80), rgba(4, 23, 19, 0.85)), url(${heroBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
            }}
          >
            {/* Ambient hover glow */}
            <div className="absolute inset-0 bg-[#E8C477]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Circular Gold Play Button */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#E8C477] flex items-center justify-center text-[#E8C477] bg-[#041713]/60 group-hover:bg-[#E8C477]/20 group-hover:scale-110 shadow-[0_0_30px_rgba(232,196,119,0.35)] transition-all duration-300">
              <Play className="w-8 h-8 md:w-10 md:h-10 fill-[#E8C477] text-[#E8C477] ml-1.5" />
            </div>

            {/* Watch Intro Video Label */}
            <span className="relative mt-5 text-lg md:text-xl font-semibold text-[#F7F7F4] tracking-wide group-hover:text-[#E8C477] transition-colors">
              Watch Intro Video
            </span>
          </div>

          {/* 4 Feature Cards (2x2 Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-5">
            {/* Card 1: Online Sessions */}
            <div className="rounded-2xl border border-[#E8C477]/40 bg-[#141414] p-4 md:p-5 flex items-center gap-4 hover:border-[#E8C477] hover:bg-[#181818] transition-all duration-300 shadow-md">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#E8C477]/60 flex items-center justify-center text-[#E8C477] bg-[#E8C477]/10 flex-shrink-0">
                <Monitor className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[#F7F7F4] leading-snug">
                  Online Sessions
                </h3>
                <p className="text-xs md:text-sm text-[#D9DDD7] mt-0.5">
                  45+ to 75 mins
                </p>
              </div>
            </div>

            {/* Card 2: Live 1:1 Support */}
            <div className="rounded-2xl border border-[#E8C477]/40 bg-[#141414] p-4 md:p-5 flex items-center gap-4 hover:border-[#E8C477] hover:bg-[#181818] transition-all duration-300 shadow-md">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#E8C477]/60 flex items-center justify-center text-[#E8C477] bg-[#E8C477]/10 flex-shrink-0">
                <User className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[#F7F7F4] leading-snug">
                  Live 1:1 Support
                </h3>
                <p className="text-xs md:text-sm text-[#D9DDD7] mt-0.5">
                  120 mins
                </p>
              </div>
            </div>

            {/* Card 3: Detailed Analysis */}
            <div className="rounded-2xl border border-[#E8C477]/40 bg-[#141414] p-4 md:p-5 flex items-center gap-4 hover:border-[#E8C477] hover:bg-[#181818] transition-all duration-300 shadow-md">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#E8C477]/60 flex items-center justify-center text-[#E8C477] bg-[#E8C477]/10 flex-shrink-0">
                <FileText className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[#F7F7F4] leading-snug">
                  Detailed Analysis
                </h3>
                <p className="text-xs md:text-sm text-[#D9DDD7] mt-0.5">
                  Written Report
                </p>
              </div>
            </div>

            {/* Card 4: Ongoing Guidance */}
            <div className="rounded-2xl border border-[#E8C477]/40 bg-[#141414] p-4 md:p-5 flex items-center gap-4 hover:border-[#E8C477] hover:bg-[#181818] transition-all duration-300 shadow-md">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#E8C477]/60 flex items-center justify-center text-[#E8C477] bg-[#E8C477]/10 flex-shrink-0">
                <Users className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[#F7F7F4] leading-snug">
                  Ongoing Guidance
                </h3>
                <p className="text-xs md:text-sm text-[#D9DDD7] mt-0.5">
                  Continuous Support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {isVideoModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl bg-[#0A0A0A] rounded-2xl border border-[#E8C477]/50 shadow-2xl p-4 md:p-6 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  aria-label="Close video modal"
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-stone-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer border-none"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-4 pr-10">
                  <h3 className="text-lg md:text-xl font-bold text-[#F7F7F4]">
                    Career Mentorship Program Overview
                  </h3>
                  <p className="text-xs md:text-sm text-[#D9DDD7] mt-1">
                    Watch Abdul Rehman Cheema explain the structure, roadmap, and outcomes of the guidance program.
                  </p>
                </div>

                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-[#E8C477]/20">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed?listType=user_uploads&list=join.arc"
                    title="Career Mentorship Program Intro Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <span className="text-xs text-[#D9DDD7]">
                    Need personalized direction? Sessions available online and in-person.
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setIsVideoModalOpen(false);
                      handleOpenApplication({
                        id: 'mentorship',
                        name: 'Career Mentorship Program',
                        duration: '03 Months',
                        fee: 'PKR 10,000/-',
                        originalFee: 'PKR 50,000/-',
                      });
                    }}
                    className="career-btn-primary px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold w-full sm:w-auto"
                  >
                    Book Mentorship Session
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ============================================================
          INTERACTIVE ACTION SECTION: TESTIMONIALS, FAQS & WHY US
          ============================================================ */}
      <section
        className="py-16 md:py-24 relative bg-[#0A0A0A] text-[#F7F7F4] transition-colors duration-300 border-b border-[#E8C477]/20"
        aria-label="Testimonials, FAQs and Why Us"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          {/* Action Tabs Navigation */}
          <div className="flex justify-center mb-10 md:mb-14">
            <div
              className="inline-flex p-1.5 rounded-full bg-[#141414] border border-[#E8C477]/35 shadow-xl"
              role="tablist"
              aria-label="Program highlights and information tabs"
            >
              <button
                type="button"
                role="tab"
                id="tab-testimonials"
                aria-controls="panel-testimonials"
                aria-selected={activeTab === 'testimonials'}
                onClick={() => setActiveTab('testimonials')}
                className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all duration-300 cursor-pointer border-none ${activeTab === 'testimonials'
                  ? 'bg-[#E8C477] text-[#0A0A0A] shadow-[0_2px_14px_rgba(232,196,119,0.35)]'
                  : 'text-[#D9DDD7] hover:text-[#F7F7F4] hover:bg-white/5 bg-transparent'
                  }`}
              >
                Testimonials
              </button>

              <button
                type="button"
                role="tab"
                id="tab-faqs"
                aria-controls="panel-faqs"
                aria-selected={activeTab === 'faqs'}
                onClick={() => setActiveTab('faqs')}
                className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all duration-300 cursor-pointer border-none ${activeTab === 'faqs'
                  ? 'bg-[#E8C477] text-[#0A0A0A] shadow-[0_2px_14px_rgba(232,196,119,0.35)]'
                  : 'text-[#D9DDD7] hover:text-[#F7F7F4] hover:bg-white/5 bg-transparent'
                  }`}
              >
                FAQs
              </button>

              <button
                type="button"
                role="tab"
                id="tab-why-us"
                aria-controls="panel-why-us"
                aria-selected={activeTab === 'why-us'}
                onClick={() => setActiveTab('why-us')}
                className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all duration-300 cursor-pointer border-none ${activeTab === 'why-us'
                  ? 'bg-[#E8C477] text-[#0A0A0A] shadow-[0_2px_14px_rgba(232,196,119,0.35)]'
                  : 'text-[#D9DDD7] hover:text-[#F7F7F4] hover:bg-white/5 bg-transparent'
                  }`}
              >
                Why Us
              </button>
            </div>
          </div>

          {/* Tab Panels */}
          <AnimatePresence mode="wait">
            {/* TAB 1: TESTIMONIALS (Active by default, 3 videos of 9:16) */}
            {activeTab === 'testimonials' && (
              <motion.div
                key="testimonials"
                id="panel-testimonials"
                role="tabpanel"
                aria-labelledby="tab-testimonials"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
              >
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F7F7F4]">
                    Mentee Reflections &amp; Video Testimonials
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D9DDD7] mt-2">
                    Real stories and candid feedback from individuals who took charge of their career paths.
                  </p>
                </div>

                {/* 3 Videos of 9:16 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {TESTIMONIAL_VIDEOS.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedTestimonialVideo(item)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedTestimonialVideo(item);
                        }
                      }}
                      aria-label={`Watch testimonial: ${item.title}`}
                      className="group relative rounded-2xl border border-[#E8C477]/40 hover:border-[#E8C477] overflow-hidden bg-[#141414] shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between aspect-[9/16] p-5"
                      style={{
                        backgroundImage: `linear-gradient(to top, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.45) 55%, rgba(4, 23, 19, 0.75) 100%), url(${heroBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* Top Badges */}
                      <div className="flex items-center justify-between z-10">
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#0A0A0A]/85 border border-[#E8C477]/40 text-[#E8C477] uppercase tracking-wider backdrop-blur-sm">
                          {item.tag}
                        </span>
                        <span className="text-[11px] font-mono text-[#D9DDD7] bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm">
                          {item.duration}
                        </span>
                      </div>

                      {/* Centered Circular Gold Play Button */}
                      <div className="flex items-center justify-center z-10 my-auto">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#E8C477] bg-[#0A0A0A]/75 flex items-center justify-center text-[#E8C477] shadow-[0_0_25px_rgba(232,196,119,0.35)] group-hover:scale-110 group-hover:bg-[#E8C477]/20 group-hover:shadow-[0_0_35px_rgba(232,196,119,0.5)] transition-all duration-300">
                          <Play className="w-6 h-6 md:w-7 md:h-7 fill-[#E8C477] text-[#E8C477] ml-1" />
                        </div>
                      </div>

                      {/* Bottom Title & Mentee Info */}
                      <div className="z-10 pt-3 border-t border-white/10">
                        <h4 className="text-sm md:text-base font-bold text-[#F7F7F4] leading-snug group-hover:text-[#E8C477] transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#D9DDD7] mt-1.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E8C477]" />
                          {item.mentee}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 2: FAQS */}
            {activeTab === 'faqs' && (
              <motion.div
                key="faqs"
                id="panel-faqs"
                role="tabpanel"
                aria-labelledby="tab-faqs"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="max-w-3xl mx-auto"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F7F7F4]">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D9DDD7] mt-2">
                    Everything you need to know about our career guidance and mentorship approach.
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={faq.question}
                        className="rounded-2xl border border-[#E8C477]/30 bg-[#141414] transition-colors duration-200 overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(index)}
                          aria-expanded={isOpen}
                          aria-controls={`action-faq-answer-${index}`}
                          id={`action-faq-btn-${index}`}
                          className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer border-none bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-[#E8C477]"
                        >
                          <span className="text-base md:text-lg font-bold text-[#F7F7F4] pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-[#E8C477] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                              }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={`action-faq-answer-${index}`}
                              role="region"
                              aria-labelledby={`action-faq-btn-${index}`}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                            >
                              <div className="px-5 pb-6 md:px-6 md:pb-6 pt-1 text-sm md:text-base text-[#D9DDD7] leading-relaxed border-t border-white/10">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* TAB 3: WHY US */}
            {activeTab === 'why-us' && (
              <motion.div
                key="why-us"
                id="panel-why-us"
                role="tabpanel"
                aria-labelledby="tab-why-us"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F7F7F4]">
                    Make Decisions with Greater Clarity
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D9DDD7] mt-2 max-w-xl mx-auto">
                    A structured, empathetic, and evidence-backed guidance methodology designed for durable conviction.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  {WHY_CHOOSE_ITEMS.map((item) => (
                    <div
                      key={item.title}
                      className="p-6 rounded-2xl bg-[#141414] border border-[#E8C477]/35 hover:border-[#E8C477] transition-all duration-300 shadow-md"
                    >
                      <h4 className="text-base font-bold text-[#F7F7F4] mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#E8C477]" />
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-[#D9DDD7] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      handleOpenApplication({
                        id: 'mentorship',
                        name: 'Career Mentorship Program',
                        duration: '03 Months',
                        fee: 'PKR 10,000/-',
                        originalFee: 'PKR 50,000/-',
                      })
                    }
                    className="career-btn-primary px-8 py-3.5 rounded-xl text-sm font-bold inline-flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Your Guidance Session</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 9:16 Testimonial Video Modal */}
        <AnimatePresence>
          {selectedTestimonialVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedTestimonialVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-sm sm:max-w-md bg-[#0A0A0A] rounded-2xl border border-[#E8C477]/50 shadow-2xl p-4 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setSelectedTestimonialVideo(null)}
                  aria-label="Close testimonial video"
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-stone-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer border-none"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-3 pr-10">
                  <span className="text-[11px] font-bold text-[#E8C477] uppercase tracking-wider">
                    {selectedTestimonialVideo.tag}
                  </span>
                  <h3 className="text-base font-bold text-[#F7F7F4] mt-0.5 line-clamp-1">
                    {selectedTestimonialVideo.title}
                  </h3>
                  <p className="text-xs text-[#D9DDD7]">
                    {selectedTestimonialVideo.mentee}
                  </p>
                </div>

                {/* 9:16 Video Player Container */}
                <div className="relative aspect-[9/16] w-full max-h-[68vh] rounded-xl overflow-hidden bg-black border border-[#E8C477]/20 mx-auto">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed?listType=user_uploads&list=join.arc"
                    title={selectedTestimonialVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="mt-3 flex items-center justify-between gap-2 pt-1">
                  <span className="text-xs text-[#D9DDD7]">Ready for clarity?</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTestimonialVideo(null);
                      handleOpenApplication({
                        id: 'mentorship',
                        name: 'Career Mentorship Program',
                        duration: '03 Months',
                        fee: 'PKR 10,000/-',
                        originalFee: 'PKR 50,000/-',
                      });
                    }}
                    className="career-btn-primary px-4 py-2 rounded-lg text-xs font-bold"
                  >
                    Book a Session
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ============================================================
          SECTION 3: INTRODUCTION TO CAREER COUNSELLING
          ============================================================ */}
      <section className="py-16 md:py-24 relative bg-[var(--neu-base)] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[var(--neu-accent)] mb-3 block">
              Foundational Clarity
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--neu-text)] mb-6">
              Find the Career Path That Fits You
            </h2>
            <p className="text-base md:text-lg text-[var(--neu-text-muted)] leading-relaxed">
              Choosing a career can feel overwhelming. Career counselling helps
              you understand your interests, recognize your strengths, explore
              suitable opportunities, and make informed decisions about your
              future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flat-card p-8 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[var(--neu-accent)]/10 text-[var(--neu-accent)] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--neu-text)] mb-3">
                Self-Understanding
              </h3>
              <p className="text-sm text-[var(--neu-text-muted)] leading-relaxed">
                Move past external expectations. Gain objective insight into
                your natural aptitudes, work preferences, and long-term
                aspirations.
              </p>
            </div>

            <div className="flat-card p-8 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[var(--neu-accent)]/10 text-[var(--neu-accent)] flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--neu-text)] mb-3">
                Informed Exploration
              </h3>
              <p className="text-sm text-[var(--neu-text-muted)] leading-relaxed">
                Discover modern industry landscapes, educational routes, and
                emerging avenues aligned with real-world demand.
              </p>
            </div>

            <div className="flat-card p-8 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[var(--neu-accent)]/10 text-[var(--neu-accent)] flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--neu-text)] mb-3">
                Strategic Decisions
              </h3>
              <p className="text-sm text-[var(--neu-text-muted)] leading-relaxed">
                Eliminate analysis paralysis. Build a realistic, step-by-step
                roadmap that turns your goals into concrete everyday actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION: CHOOSE YOUR PATH (PRICING & MEMBERSHIP PLANS)
          ============================================================ */}
      <section
        id="choose-your-path"
        className="py-16 md:py-24 relative bg-[#041713] text-[#F7F7F4] overflow-hidden border-y border-[#E8C477]/20"
        aria-label="Choose Your Path - Career Guidance Plans"
      >
        {/* Mountain Landscape Background Backdrop */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(4, 23, 19, 0.4) 0%, rgba(4, 23, 19, 0.95) 75%, #041713 100%), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right 25%',
          }}
        />

        <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-6xl">
          {/* Header */}
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F7F4] leading-[1.1] mb-4 font-sans">
              Choose Your{' '}
              <span className="text-[#E8C477] drop-shadow-[0_2px_15px_rgba(232,196,119,0.3)]">
                Path
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#D9DDD7] leading-relaxed max-w-xl">
              Select the program that fits your goals and start your journey
              towards a successful and fulfilling career.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
            {/* Plan 1: 45 Min Call */}
            <div className="relative rounded-3xl border border-[#E8C477]/40 bg-[#06231D]/80 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#E8C477] hover:shadow-[0_10px_35px_rgba(232,196,119,0.15)] transition-all duration-300">
              <div>
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full border border-[#E8C477]/60 bg-[#E8C477]/10 flex items-center justify-center text-[#E8C477] flex-shrink-0 shadow-[0_0_15px_rgba(232,196,119,0.2)]">
                    <Headphones className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F7F7F4] leading-tight">
                      45 Min Call
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D9DDD7] mt-0.5 font-medium">
                      02 Online Sessions
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 my-8">
                  <li className="flex items-center gap-3 text-sm sm:text-base text-[#F7F7F4]">
                    <Check className="w-5 h-5 text-[#E8C477] flex-shrink-0 stroke-[2.5]" />
                    <span>Personalized career guidance</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base text-[#F7F7F4]">
                    <Check className="w-5 h-5 text-[#E8C477] flex-shrink-0 stroke-[2.5]" />
                    <span>Goal setting &amp; direction</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base text-[#F7F7F4]">
                    <Check className="w-5 h-5 text-[#E8C477] flex-shrink-0 stroke-[2.5]" />
                    <span>Basic roadmap for success</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base text-[#F7F7F4]">
                    <Check className="w-5 h-5 text-[#E8C477] flex-shrink-0 stroke-[2.5]" />
                    <span>Follow-up support</span>
                  </li>
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="pt-6 border-t border-[#E8C477]/20">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-base sm:text-lg font-bold text-[#E8C477]">
                    PKR
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F7F7F4] tracking-tight">
                    10,000/-
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleOpenApplication({
                      id: '45min-call',
                      name: '45 Min Call',
                      duration: '02 Online Sessions',
                      fee: 'PKR 10,000/-',
                      originalFee: 'PKR 20,000/-',
                    })
                  }
                  className="w-full bg-[#E8C477] hover:bg-[#dfb763] text-[#041713] font-bold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-[#E8C477]/25 cursor-pointer text-sm sm:text-base border-none"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Plan 2: Complete Program */}
            <div className="relative rounded-3xl border border-[#E8C477]/50 bg-[#06231D]/80 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#E8C477] hover:shadow-[0_10px_35px_rgba(232,196,119,0.2)] transition-all duration-300">
              <div>
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full border border-[#E8C477]/60 bg-[#E8C477]/10 flex items-center justify-center text-[#E8C477] flex-shrink-0 shadow-[0_0_15px_rgba(232,196,119,0.2)]">
                    <Laptop className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F7F7F4] leading-tight">
                      Complete Program
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D9DDD7] mt-0.5 font-medium">
                      02 Online Sessions + 01 Physical Session
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 my-8">
                  <li className="flex items-center gap-3 text-sm sm:text-base text-[#F7F7F4]">
                    <Check className="w-5 h-5 text-[#E8C477] flex-shrink-0 stroke-[2.5]" />
                    <span>In-depth career planning</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base text-[#F7F7F4]">
                    <Check className="w-5 h-5 text-[#E8C477] flex-shrink-0 stroke-[2.5]" />
                    <span>Written report &amp; analysis</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base text-[#F7F7F4]">
                    <Check className="w-5 h-5 text-[#E8C477] flex-shrink-0 stroke-[2.5]" />
                    <span>03 months of continuous support</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base text-[#F7F7F4]">
                    <Check className="w-5 h-5 text-[#E8C477] flex-shrink-0 stroke-[2.5]" />
                    <span>Priority guidance &amp; follow-ups</span>
                  </li>
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="pt-6 border-t border-[#E8C477]/20">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-base sm:text-lg font-bold text-[#E8C477]">
                    PKR
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F7F7F4] tracking-tight">
                    50,000/-
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleOpenApplication({
                      id: 'complete-program',
                      name: 'Complete Program',
                      duration: '02 Online Sessions + 01 Physical Session',
                      fee: 'PKR 50,000/-',
                      originalFee: 'PKR 75,000/-',
                    })
                  }
                  className="w-full bg-transparent hover:bg-[#E8C477]/15 border-2 border-[#E8C477] text-[#E8C477] hover:text-[#F7F7F4] font-bold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer text-sm sm:text-base"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ============================================================
          SECTION 7: FINAL CALL TO ACTION
          ============================================================ */}
      <section className="py-20 md:py-28 relative bg-[var(--neu-base)] transition-colors duration-300 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[var(--neu-card-bg)] border border-[var(--neu-border)]">
            <Sparkles className="w-3.5 h-3.5 text-[var(--neu-accent)]" />
            <span className="text-xs uppercase tracking-wider font-semibold text-[var(--neu-text-muted)]">
              Take The Next Step
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--neu-text)] leading-tight mb-6">
            Your Next Chapter Starts with a Clear Direction
          </h2>

          <p className="text-base sm:text-lg text-[var(--neu-text-muted)] max-w-xl mx-auto mb-10 leading-relaxed">
            Take the first step toward understanding your options and planning
            your future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                handleOpenApplication({
                  id: 'mentorship',
                  name: 'Career Mentorship Program',
                  duration: '03 Months',
                  fee: 'PKR 10,000/-',
                  originalFee: 'PKR 50,000/-',
                })
              }
              className="glass-btn-primary px-8 py-4 text-base font-bold rounded-xl cursor-pointer border-none shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/923458612538?text=Hello%20ARC,%20I%20would%20like%20to%20inquire%20about%20Career%20Counselling."
              target="_blank"
              rel="noopener noreferrer"
              className="neu-btn px-8 py-4 text-base font-bold rounded-xl w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          CAREER APPLICATION MODAL (Step 1 Form + Step 2 Payment)
          ============================================================ */}
      <CareerApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
        selectedPlan={selectedPlanForModal}
      />

      {/* ============================================================
          SECTION 10: FOOTER
          ============================================================ */}
      <Footer />
    </div>
  );
}

