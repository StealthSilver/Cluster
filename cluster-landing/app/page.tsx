import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-dark-tertiary">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-accent-warm">Cluster</h1>
          <Link href="/app/login" className="bg-accent-warm text-dark-bg px-6 py-2 rounded hover:bg-opacity-90">
            Enter App
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          className="max-w-3xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className="text-6xl font-bold mb-6 leading-tight">
            Think Before You Share
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 mb-8 leading-relaxed">
            Cluster is a relationship-aware social space designed for intentional connection. No algorithms pushing engagement. Just genuine human connection.
          </motion.p>
          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <Link href="/app/signup" className="bg-accent-warm text-dark-bg px-8 py-3 rounded font-semibold hover:bg-opacity-90">
              Get Started
            </Link>
            <Link href="#how-it-works" className="border border-accent-warm px-8 py-3 rounded hover:bg-dark-secondary">
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.h3 className="text-4xl font-bold text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Why Cluster?
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Intentional Spaces', desc: 'Join tribes that matter to you, not what algorithms think you should see.' },
              { title: 'Your Circle', desc: 'Map your closest connections with a private, personal closeness graph.' },
              { title: 'Tribe-Based Sharing', desc: 'Share within the communities you care about, not broadcast to everyone.' },
              { title: 'Cluster Map', desc: 'See the global community landscape without losing your personal thread.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-dark-bg rounded border border-dark-tertiary hover:border-accent-warm transition-all"
              >
                <h4 className="text-xl font-bold text-accent-warm mb-3">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h3 className="text-4xl font-bold text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            How It Works
          </motion.h3>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Sign Up', desc: 'Create your Cluster account with your name and interests.' },
              { step: '2', title: 'Discover Tribes', desc: 'Browse public interest groups and join the ones that resonate.' },
              { step: '3', title: 'Build Your Circle', desc: 'Add people to your private circle with closeness scores.' },
              { step: '4', title: 'Share Intentionally', desc: 'Post within tribes and engage meaningfully with your community.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start p-6 bg-dark-secondary rounded border border-dark-tertiary"
              >
                <div className="text-4xl font-bold text-accent-warm min-w-fit">{item.step}</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h3 className="text-4xl font-bold mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Ready to Connect Intentionally?
          </motion.h3>
          <motion.p className="text-gray-400 mb-8 text-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Join Cluster today and be part of a new way of thinking about social connection.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Link href="/app/signup" className="inline-block bg-accent-warm text-dark-bg px-8 py-3 rounded font-semibold hover:bg-opacity-90">
              Create Account
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-dark-tertiary text-center text-gray-400">
        <p>© 2024 Cluster. A calmer approach to social connection.</p>
      </footer>
    </div>
  );
}
