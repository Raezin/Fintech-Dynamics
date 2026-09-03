// lib/blogService.js
// Mock data shows instantly as placeholder, real API data replaces it when ready

const MOCK_BLOGS = [
  {
    id: '1',
    slug: 'future-of-fintech',
    title: 'The Future of Fintech: Trends to Watch in 2024',
    excerpt: 'Explore the latest innovations reshaping financial technology, from AI-powered accounting to blockchain in banking.',
    content: `<h2>The Rise of AI in Financial Services</h2><p>Artificial intelligence is revolutionizing how financial institutions operate. From automated customer service to fraud detection, AI is becoming indispensable.</p><h2>Blockchain Beyond Cryptocurrency</h2><p>While blockchain gained fame through cryptocurrencies, its applications in secure transactions and smart contracts are transforming traditional finance.</p><h2>Embedded Finance: The New Normal</h2><p>Financial services are being embedded into non-financial platforms, creating seamless user experiences and new revenue streams.</p>`,
    date: 'Feb 28, 2024',
    author: 'Sarah Ahmed',
    authorImage: '/images/authors/sarah.jpg',
    category: 'Fintech',
    tags: ['Fintech', 'Trends', 'Innovation'],
    readTime: '5 min read',
    featured: true,
    image: '/images/blog/fintech-trends.jpg',
    isMock: true,
  },
  {
    id: '2',
    slug: 'accounting-automation',
    title: 'How Automation is Transforming Accounting',
    excerpt: 'Discover how AI and machine learning are revolutionizing traditional accounting processes.',
    content: `<h2>The Evolution of Accounting</h2><p>Accounting has come a long way from manual ledgers to sophisticated digital solutions. Today, automation is taking it to the next level.</p><h2>AI-Powered Bookkeeping</h2><p>Machine learning algorithms can now categorize transactions, reconcile accounts, and flag anomalies with remarkable accuracy.</p>`,
    date: 'Feb 25, 2024',
    author: 'Ali Raza',
    authorImage: '/images/authors/ali.jpg',
    category: 'Accounting',
    tags: ['Accounting', 'Automation', 'AI'],
    readTime: '4 min read',
    featured: false,
    image: '/images/blog/accounting-automation.jpg',
    isMock: true,
  },
  {
    id: '3',
    slug: 'tax-planning-strategies',
    title: 'Essential Tax Planning Strategies for SMEs',
    excerpt: 'Learn key tax planning strategies that help small and medium enterprises optimize their tax position.',
    content: `<h2>Understanding Your Tax Obligations</h2><p>SMEs face unique tax challenges. Understanding your obligations is the first step toward effective planning.</p><h2>Deductions and Credits</h2><p>Many SMEs miss out on valuable deductions and credits. We'll show you what to look for.</p>`,
    date: 'Feb 22, 2024',
    author: 'Fatima Khan',
    authorImage: '/images/authors/fatima.jpg',
    category: 'Tax',
    tags: ['Tax', 'SMEs', 'Planning'],
    readTime: '6 min read',
    featured: false,
    image: '/images/blog/tax-planning.jpg',
    isMock: true,
  },
  {
    id: '4',
    slug: 'financial-reporting-best-practices',
    title: 'Best Practices in Financial Reporting',
    excerpt: 'A comprehensive guide to maintaining accurate financial records and creating meaningful reports.',
    content: `<h2>The Importance of Accurate Reporting</h2><p>Financial reports are the language of business. They communicate your company's health to stakeholders.</p>`,
    date: 'Feb 20, 2024',
    author: 'Omar Hassan',
    authorImage: '/images/authors/omar.jpg',
    category: 'Reporting',
    tags: ['Reporting', 'Best Practices', 'Compliance'],
    readTime: '5 min read',
    featured: false,
    image: '/images/blog/financial-reporting.jpg',
    isMock: true,
  },
  {
    id: '5',
    slug: 'startup-financial-planning',
    title: 'Financial Planning Guide for Startups',
    excerpt: 'Essential financial planning tips every startup founder needs to know for sustainable growth.',
    content: `<h2>Building a Financial Foundation</h2><p>Startups need solid financial foundations to attract investors and scale effectively.</p>`,
    date: 'Feb 18, 2024',
    author: 'Zara Malik',
    authorImage: '/images/authors/zara.jpg',
    category: 'Startups',
    tags: ['Startups', 'Planning', 'Funding'],
    readTime: '7 min read',
    featured: false,
    image: '/images/blog/startup-planning.jpg',
    isMock: true,
  },
  {
    id: '6',
    slug: 'payroll-compliance',
    title: 'Navigating Payroll Compliance in 2024',
    excerpt: 'Stay compliant with the latest payroll regulations and avoid common pitfalls.',
    content: `<h2>Understanding Payroll Regulations</h2><p>Payroll compliance is complex and constantly changing. Stay up-to-date with the latest requirements.</p>`,
    date: 'Feb 15, 2024',
    author: 'Usman Chaudhry',
    authorImage: '/images/authors/usman.jpg',
    category: 'Compliance',
    tags: ['Payroll', 'Compliance', 'HR'],
    readTime: '4 min read',
    featured: false,
    image: '/images/blog/payroll-compliance.jpg',
    isMock: true,
  },
];

const API_BASE = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const DJANGO_BASE = process.env.NEXT_PUBLIC_DJANGO_URL || 'http://127.0.0.1:8000';

// Rewrites relative image src URLs in HTML content to absolute Django URLs
// e.g. src="/media/blogs/img.jpg" → src="http://127.0.0.1:8000/media/blogs/img.jpg"
function rewriteContentImages(html) {
  if (!html) return '';
  return html.replace(
    /(<img\s[^>]*src=["'])(?!https?:\/\/)(\/?)(?!http)/gi,
    `$1${DJANGO_BASE}/`
  );
}

// Normalize a raw Django blog object into the shape the UI expects
function normalizeBlog(blog) {
  return {
    id:          String(blog.id),
    slug:        blog.slug,
    title:       blog.title,
    excerpt:     blog.short_description ?? blog.excerpt ?? '',
    content:     rewriteContentImages(blog.content ?? ''),
    date:        blog.created_at
                   ? new Date(blog.created_at).toLocaleDateString('en-US', {
                       year: 'numeric', month: 'short', day: 'numeric',
                     })
                   : blog.date ?? '',
    author:      blog.author ?? 'Team',
    authorImage: blog.author_image ?? blog.authorImage ?? null,
    category:    blog.category ?? 'General',
    tags:        blog.tags ?? [],
    readTime:    blog.read_time ?? blog.readTime ?? null,
    featured:    blog.featured ?? false,
    image:       blog.image_url ?? blog.image ?? null,
    isMock:      false,
  };
}

export const BlogService = {
  // Returns mock data immediately — use for initial render
  getMockBlogs() {
    return MOCK_BLOGS;
  },

  // Returns a single mock blog by slug — use for initial render on detail page
  getMockBlogBySlug(slug) {
    return MOCK_BLOGS.find((b) => b.slug === slug) ?? MOCK_BLOGS[0];
  },

  // Fetches all real blogs from Django. Returns [] on failure.
  async getAllBlogs() {
    try {
      const res = await fetch(`${API_BASE}/api/blogs`, {
        next: { revalidate: 60 },
      });
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const data = await res.json();
      return data.map(normalizeBlog);
    } catch (error) {
      console.error('BlogService.getAllBlogs failed:', error);
      return [];
    }
  },

  // Fetches a single real blog by slug. Returns null on failure.
  async getBlogBySlug(slug) {
    try {
      const res = await fetch(`${API_BASE}/api/blogs/${slug}`, {
        next: { revalidate: 60 },
      });
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      return normalizeBlog(await res.json());
    } catch (error) {
      console.error('BlogService.getBlogBySlug failed:', error);
      return null;
    }
  },

  // Derives unique category list from any blog array
  getCategoriesFromBlogs(blogs) {
    const unique = [...new Set(blogs.map((b) => b.category))];
    return ['All', ...unique];
  },

  async getAllCategories() {
    const blogs = await this.getAllBlogs();
    const source = blogs.length > 0 ? blogs : MOCK_BLOGS;
    return this.getCategoriesFromBlogs(source);
  },

  // Returns the latest blog (first = newest from Django)
  async getFeaturedBlog() {
    const blogs = await this.getAllBlogs();
    if (blogs.length > 0) return blogs[0];
    return MOCK_BLOGS.find((b) => b.featured) ?? MOCK_BLOGS[0];
  },

  // Client-side search across any blog array
  searchBlogs(blogs, query) {
    const q = query.toLowerCase();
    return blogs.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q) ||
        (b.content ?? '').toLowerCase().includes(q)
    );
  },
};