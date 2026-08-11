import { blogs } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { BentoCard } from '../components/BentoCard';
import { Reveal } from '../hooks/useScrollStory';
import './Blogs.css';

export function Blogs() {
  return (
    <section id="blogs" className="section blogs">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Blogs"
            title={
              <>
                Insights from the <em>clinic</em>
              </>
            }
            subtitle="Short reads that deepen the story — hair science, skin clarity, and treatment choices."
          />
        </Reveal>

        <div className="bento">
          {blogs.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.06} className={i === 0 ? 'span-6' : 'span-3'}>
              <BentoCard className="blog-card" as="article" strong={i === 0}>
                <div className="blog-card__meta">
                  <span>{post.tag}</span>
                  <span>{post.read} read</span>
                </div>
                <h3 className="display">{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#contact" className="blog-card__link">
                  Read more →
                </a>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
