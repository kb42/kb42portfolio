import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink, FiGitPullRequest } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Contribution {
  title: string;
  description: string;
  repository: string;
  link?: string;
  technologies: string[];
}

interface GitHubStats {
  totalContributions: number;
  publicRepos: number;
  followers: number;
  following: number;
  languages: Record<string, number>;
  totalStars: number;
  totalForks: number;
  topLanguage: string;
  monthlyPRs: number;
  monthlyIssues: number;
  monthlyCommits: number;
  recentActivity: string;
}

const OpenSource = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  const contributions: Contribution[] = [
    {
      title: 'XLang-AI Spider2 Dataset',
      description: 'Identified and fixed evaluation bugs in a popular text-to-SQL benchmark, becoming an official contributor on GitHub.',
      repository: 'xlang-ai/spider2',
      link: 'https://github.com/xlang-ai/Spider2',
      technologies: ['Python', 'SQL', 'Text-to-SQL', 'Evaluation']
    },
    {
      title: 'MDN Web Docs',
      description: 'Improved Web API and storage quota documentation by submitting code example fixes and clarifications to ensure accuracy for developers.',
      repository: 'mdn/content',
      link: 'https://github.com/mdn/content/', 
      technologies: ['Documentation', 'Web APIs', 'JavaScript', 'HTML']
    },
    {
      title: 'FreeCodeCamp',
      description: 'Contributed to large-scale open-source education tools by fixing documentation and minor bugs, supporting a global learning community.',
      repository: 'freeCodeCamp/freeCodeCamp',
      link: 'https://github.com/freeCodeCamp/freeCodeCamp/', 
      technologies: ['Education', 'Documentation', 'Bug Fixes', 'Community']
    }
  ];

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = 'kb42';
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        
        // Fetch repositories to get languages and stars/forks
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const reposData = await reposResponse.json();
        
        // Fetch recent events for monthly activity
        const eventsResponse = await fetch(`https://api.github.com/users/${username}/events?per_page=100`);
        const eventsData = await eventsResponse.json();
        
        // Calculate total stars and forks
        const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((sum: number, repo: any) => sum + repo.forks_count, 0);
        
        // Calculate languages and get top language
        const languageCounts: Record<string, number> = {};
        reposData.forEach((repo: any) => {
          if (repo.language) {
            languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
          }
        });
        
        const topLanguage = Object.entries(languageCounts)
          .sort(([,a], [,b]) => b - a)[0]?.[0] || 'JavaScript';
        
        // Calculate monthly activity (current month)
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        
        const monthlyEvents = eventsData.filter((event: any) => {
          const eventDate = new Date(event.created_at);
          return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
        });
        
        const monthlyPRs = monthlyEvents.filter((event: any) => event.type === 'PullRequestEvent').length;
        const monthlyIssues = monthlyEvents.filter((event: any) => event.type === 'IssuesEvent').length;
        const monthlyCommits = monthlyEvents.filter((event: any) => event.type === 'PushEvent')
          .reduce((sum: number, event: any) => sum + (event.payload?.commits?.length || 0), 0);
        
        // Get most recent activity for fallback
        let recentActivity = 'No recent activity';
        if (eventsData.length > 0) {
          const latestEvent = eventsData[0];
          const eventDate = new Date(latestEvent.created_at);
          const daysAgo = Math.floor((now.getTime() - eventDate.getTime()) / (1000 * 60 * 60 * 24));
          
          if (latestEvent.type === 'PushEvent') {
            recentActivity = `Pushed ${daysAgo}d ago`;
          } else if (latestEvent.type === 'PullRequestEvent') {
            recentActivity = `PR ${daysAgo}d ago`;
          } else if (latestEvent.type === 'IssuesEvent') {
            recentActivity = `Issue ${daysAgo}d ago`;
          } else {
            recentActivity = `Active ${daysAgo}d ago`;
          }
        }
        
        setGithubStats({
          totalContributions: userData.public_repos + userData.public_gists,
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          languages: languageCounts,
          totalStars,
          totalForks,
          topLanguage,
          monthlyPRs,
          monthlyIssues,
          monthlyCommits,
          recentActivity
        });
        
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  return (
    <section id="opensource" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`reveal ${isVisible ? 'reveal-visible' : ''} text-center mb-16`}>
          <h2 className="section-title">Open Source</h2>
          <p className="section-subtitle">Contributing to the Community</p>
        </div>

        {/* GitHub Stats */}
        <div className={`reveal ${isVisible ? 'reveal-visible' : ''} card mb-12`}>
          <div className="flex items-center space-x-3 mb-6">
            <AiFillGithub className="text-secondary text-2xl" />
            <h3 className="text-xl font-bold text-text-light">GitHub Activity</h3>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center">
                  <div className="h-8 bg-secondary/10 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 bg-secondary/10 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          ) : githubStats ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{githubStats.publicRepos}</div>
                <div className="text-sm text-text">Public Repos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{githubStats.topLanguage}</div>
                <div className="text-sm text-text">Top Language</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">
                  {githubStats.monthlyPRs + githubStats.monthlyIssues}
                </div>
                <div className="text-sm text-text">PRs + Issues This Month</div>
              </div>
              <div className="text-center">
                {githubStats.monthlyCommits > 0 ? (
                  <>
                    <div className="text-2xl font-bold text-secondary">{githubStats.monthlyCommits}</div>
                    <div className="text-sm text-text">Commits This Month</div>
                  </>
                ) : (
                  <>
                    <div className="text-lg font-bold text-secondary">{githubStats.recentActivity}</div>
                    <div className="text-sm text-text">Recent Activity</div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center text-text">
              <p>Unable to load GitHub stats</p>
            </div>
          )}
        </div>

        {/* Contributions */}
        <div className={`reveal ${isVisible ? 'reveal-visible' : ''} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
          {contributions.map((contribution) => (
            <motion.div
              key={contribution.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="card group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <FiGitPullRequest className="text-secondary flex-shrink-0" />
                  <h3 className="text-text-light font-semibold text-sm">{contribution.title}</h3>
                </div>
                {contribution.link && (
                  <motion.a
                    href={contribution.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-secondary hover:text-secondary/80 transition-colors"
                    title="View Contribution"
                  >
                    <FiExternalLink size={16} />
                  </motion.a>
                )}
              </div>

              <div className="mb-3">
                <span className="text-xs font-sf-mono text-text/70">{contribution.repository}</span>
              </div>

              <p className="text-text text-sm mb-4 leading-relaxed">{contribution.description}</p>

              <div className="flex flex-wrap gap-1">
                {contribution.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-sf-mono bg-secondary/10 text-secondary rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className={`reveal ${isVisible ? 'reveal-visible' : ''} text-center mt-12`}>
          <motion.a
            href="https://github.com/kb42"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-secondary text-primary rounded-lg font-sf-mono text-sm hover:bg-secondary/90 transition-colors"
          >
            <AiFillGithub size={20} />
            <span>View More on GitHub</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;