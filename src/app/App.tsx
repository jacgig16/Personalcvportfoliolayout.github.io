import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowRight, Target, Users, TrendingUp, ExternalLink, Moon, Sun, Briefcase, Globe, Heart, Calendar } from 'lucide-react';
import profileImage from '../imports/NewCVTest.jpg';

export default function App() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(true);

  const skillCategories = [
    {
      category: 'Discovery',
      skills: [
        { name: 'User Research & Testing', level: 90 },
        { name: 'Customer Interviews', level: 88 },
        { name: 'Market Analysis', level: 85 }
      ]
    },
    {
      category: 'Strategy',
      skills: [
        { name: 'Product Strategy & Roadmapping', level: 92 },
        { name: 'Stakeholder Management', level: 88 },
        { name: 'Business Model Design', level: 86 }
      ]
    },
    {
      category: 'Delivery',
      skills: [
        { name: 'Agile & Scrum Methodologies', level: 87 },
        { name: 'Cross-Functional Leadership', level: 89 },
        { name: 'Sprint Planning & Execution', level: 90 }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Jira & Confluence', level: 93 },
        { name: 'Figma & Design Tools', level: 85 },
        { name: 'Data Analysis & Metrics', level: 88 }
      ]
    }
  ];

  const workExperience = [
    {
      title: 'Product Manager',
      company: 'Tech Company Inc.',
      companyUrl: 'https://techcompany.com',
      location: 'San Francisco, CA',
      period: 'Jan 2023 - Present',
      year: '2023',
      achievements: [
        'Led product strategy for core platform serving 2M+ users, resulting in 35% increase in user engagement',
        'Managed cross-functional team of 12 engineers, designers, and data analysts',
        'Launched 3 major features that contributed $8M in annual recurring revenue',
        'Established data-driven product development process, reducing time-to-market by 40%'
      ]
    },
    {
      title: 'Associate Product Manager',
      company: 'Growth Startup Co.',
      companyUrl: 'https://growthstartup.com',
      location: 'Remote',
      period: 'Jun 2021 - Dec 2022',
      year: '2021',
      achievements: [
        'Owned end-to-end product lifecycle for mobile app with 500K+ downloads',
        'Conducted user research with 200+ customers to identify pain points and opportunities',
        'Improved conversion funnel by 28% through A/B testing and iterative improvements',
        'Collaborated with engineering team to reduce technical debt by 30%'
      ]
    },
    {
      title: 'Product Analyst',
      company: 'Enterprise Solutions Ltd.',
      companyUrl: 'https://enterprisesolutions.com',
      location: 'New York, NY',
      period: 'Aug 2019 - May 2021',
      year: '2019',
      achievements: [
        'Analyzed user behavior data to inform product roadmap decisions',
        'Created dashboards and reports for executive leadership team',
        'Supported launch of 2 B2B products generating $3M in first-year revenue',
        'Partnered with UX team to optimize user experience based on analytics insights'
      ]
    }
  ];

  const languages = [
    { name: 'Italian', level: 'Native' },
    { name: 'English', level: 'Full Proficiency' },
    { name: 'Spanish', level: 'Full Proficiency' }
  ];

  const hobbies = [
    {
      title: 'Traveling',
      description: 'Exploring new cultures and cuisines around the world. Visited 25+ countries and counting.',
      icon: '✈️'
    },
    {
      title: 'Photography',
      description: 'Capturing moments and landscapes through my lens. Specializing in street and nature photography.',
      icon: '📷'
    },
    {
      title: 'Cooking',
      description: 'Experimenting with Italian and fusion recipes. Love hosting dinner parties for friends.',
      icon: '🍳'
    },
    {
      title: 'Hiking',
      description: 'Weekend warrior on mountain trails. Completed several multi-day treks including the Inca Trail.',
      icon: '⛰️'
    }
  ];

  const projects = [
    {
      title: 'Mobile App Redesign',
      description: 'Led complete redesign that increased user engagement by 45% and reduced churn by 30%',
      tags: ['User Research', 'A/B Testing', 'iOS & Android'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'B2B SaaS Platform Launch',
      description: 'Launched enterprise product from 0-1, achieving $2M ARR in first year with 85% customer retention',
      tags: ['Go-to-Market', 'Enterprise Sales', 'Product-Market Fit'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Checkout Flow Optimization',
      description: 'Reimagined checkout experience resulting in 28% increase in conversion and $5M annual revenue impact',
      tags: ['Data Analysis', 'UX Research', 'Growth'],
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white'
        : 'bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md z-50 transition-colors ${
        isDark
          ? 'bg-slate-950/50 border-b border-white/10'
          : 'bg-white/50 border-b border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Curriculum Vitae
          </motion.div>
          <div className="flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-6"
            >
              <a href="#about" className={`transition-colors ${isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}`}>About</a>
              <a href="#experience" className={`transition-colors ${isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}`}>Experience</a>
              <a href="#projects" className={`transition-colors ${isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}`}>Projects</a>
              <a href="#contact" className={`transition-colors ${isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}`}>Contact</a>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20'
                  : 'bg-slate-900/10 hover:bg-slate-900/20'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-block">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/50">
                <img src={profileImage} alt="Jacopo Agostinone" className="w-full h-full object-cover" />
              </div>
            </div>
            <h1 className={`text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent ${
              isDark
                ? 'from-white via-cyan-200 to-blue-400'
                : 'from-slate-900 via-cyan-600 to-blue-600'
            }`}>
              Jacopo Agostinone
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Product Manager | Driving Growth Through User-Centered Innovation
            </p>
            <p className={`text-lg max-w-2xl mx-auto mb-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Strategic product leader with 5+ years building products that delight users and drive business impact.
              Seeking Senior PM opportunities to scale products and mentor teams.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
              >
                Get In Touch <ArrowRight size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className={`px-8 py-4 rounded-full font-medium transition-colors ${
                  isDark
                    ? 'border border-white/20 hover:bg-white/10'
                    : 'border border-slate-300 hover:bg-slate-900/10'
                }`}
              >
                View Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              About Me
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className={`backdrop-blur-sm rounded-2xl p-6 transition-colors ${
                isDark
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                  : 'bg-slate-900/5 border border-slate-200 hover:bg-slate-900/10'
              }`}>
                <Target className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">User-Centric</h3>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Deep customer empathy driving every product decision and prioritization.</p>
              </div>
              <div className={`backdrop-blur-sm rounded-2xl p-6 transition-colors ${
                isDark
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                  : 'bg-slate-900/5 border border-slate-200 hover:bg-slate-900/10'
              }`}>
                <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Leveraging metrics and analytics to validate hypotheses and measure impact.</p>
              </div>
              <div className={`backdrop-blur-sm rounded-2xl p-6 transition-colors ${
                isDark
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                  : 'bg-slate-900/5 border border-slate-200 hover:bg-slate-900/10'
              }`}>
                <Users className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cross-Functional Leader</h3>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Bringing together engineering, design, and business to ship great products.</p>
              </div>
            </div>
            <p className={`text-lg leading-relaxed text-center max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              I'm a Product Manager with 5+ years of experience shipping products that users love and driving measurable
              business outcomes. I've led cross-functional teams through complex product launches, scaled features from
              concept to millions of users, and mentored junior PMs. Currently seeking Senior PM opportunities where I can
              drive strategic vision, influence product direction, and grow high-performing teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <Calendar className="w-8 h-8 text-cyan-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-center">
                Career Timeline
              </h2>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${
                isDark ? 'bg-white/20' : 'bg-slate-900/20'
              }`} />

              {/* Timeline items */}
              <div className="space-y-12">
                {workExperience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className={`backdrop-blur-sm rounded-2xl p-6 transition-colors ${
                        isDark
                          ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                          : 'bg-slate-900/5 border border-slate-200 hover:bg-slate-900/10'
                      }`}>
                        <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                        <p className="text-cyan-400 font-medium mb-1">{job.company}</p>
                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{job.period}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="relative flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-4 border-slate-950 z-10 shadow-lg shadow-cyan-500/50" />
                    </div>

                    {/* Year */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      <span className={`text-3xl font-bold ${isDark ? 'text-white/30' : 'text-slate-900/30'}`}>
                        {job.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className={`py-20 px-6 ${isDark ? 'bg-white/5' : 'bg-slate-900/5'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <Briefcase className="w-8 h-8 text-cyan-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-center">
                Work Experience
              </h2>
            </div>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`backdrop-blur-sm rounded-2xl p-6 transition-colors ${
                    isDark
                      ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                      : 'bg-slate-900/5 border border-slate-200 hover:bg-slate-900/10'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{job.title}</h3>
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 font-medium mb-1 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                      >
                        {job.company}
                        <ExternalLink size={16} />
                      </a>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{job.location}</p>
                    </div>
                    <span className={`mt-2 md:mt-0 px-4 py-1 rounded-full text-sm font-medium ${
                      isDark
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : 'bg-cyan-500/20 text-cyan-700'
                    }`}>
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className={`flex gap-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className={`backdrop-blur-sm rounded-2xl p-6 transition-colors ${
                    isDark
                      ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                      : 'bg-slate-900/5 border border-slate-200 hover:bg-slate-900/10'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">{category.category}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{skill.level}%</span>
                        </div>
                        <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-slate-900/10'}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Languages Section */}
      <section className={`py-20 px-6 ${isDark ? 'bg-white/5' : 'bg-slate-900/5'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <Globe className="w-8 h-8 text-cyan-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-center">
                Languages
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`backdrop-blur-sm rounded-2xl p-6 text-center transition-colors ${
                    isDark
                      ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                      : 'bg-slate-900/5 border border-slate-200 hover:bg-slate-900/10'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{language.name}</h3>
                  <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{language.level}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`group relative backdrop-blur-sm rounded-2xl p-6 transition-all cursor-pointer overflow-hidden ${
                    isDark
                      ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                      : 'bg-slate-900/5 border border-slate-200 hover:bg-slate-900/10'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <ExternalLink
                        className={`transition-transform ${hoveredProject === index ? 'translate-x-1 -translate-y-1' : ''}`}
                        size={20}
                      />
                    </div>
                    <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDark
                              ? 'bg-white/10 border border-white/10'
                              : 'bg-slate-900/10 border border-slate-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outside of Work Section */}
      <section className={`py-20 px-6 ${isDark ? 'bg-white/5' : 'bg-slate-900/5'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <Heart className="w-8 h-8 text-cyan-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-center">
                Outside of Work
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`backdrop-blur-sm rounded-2xl p-6 transition-colors ${
                    isDark
                      ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                      : 'bg-slate-900/5 border border-slate-200 hover:bg-slate-900/10'
                  }`}
                >
                  <div className="text-4xl mb-4 text-center">{hobby.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-center">{hobby.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{hobby.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${isDark ? 'bg-white/5' : 'bg-slate-900/5'}`}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className={`text-lg mb-12 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex gap-6 justify-center mb-12">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:jane@example.com"
                className={`w-14 h-14 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-colors ${
                  isDark
                    ? 'bg-white/10 border border-white/20'
                    : 'bg-slate-900/10 border border-slate-300'
                }`}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com"
                className={`w-14 h-14 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-colors ${
                  isDark
                    ? 'bg-white/10 border border-white/20'
                    : 'bg-slate-900/10 border border-slate-300'
                }`}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com"
                className={`w-14 h-14 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-colors ${
                  isDark
                    ? 'bg-white/10 border border-white/20'
                    : 'bg-slate-900/10 border border-slate-300'
                }`}
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:jane@example.com"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
            >
              Send Me an Email
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center transition-colors ${
        isDark
          ? 'text-slate-400 border-t border-white/10'
          : 'text-slate-600 border-t border-slate-200'
      }`}>
        <p>© 2026 Jacopo Agostinone. Product Manager | Curriculum Vitae</p>
      </footer>
    </div>
  );
}