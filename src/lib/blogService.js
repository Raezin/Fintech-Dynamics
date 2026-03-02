// lib/blogService.js
// This is the central point where frontend and backend meet

// Mock data for frontend development (will be replaced by backend API)
const MOCK_BLOGS = [
  {
    id: '1',
    slug: 'future-of-fintech',
    title: 'The Future of Fintech: Trends to Watch in 2024',
    excerpt: 'Explore the latest innovations reshaping financial technology, from AI-powered accounting to blockchain in banking.',
    content: `
      <h2>The Rise of AI in Financial Services</h2>
      <p>Artificial intelligence is revolutionizing how financial institutions operate. From automated customer service to fraud detection, AI is becoming indispensable.</p>
      
      <h2>Blockchain Beyond Cryptocurrency</h2>
      <p>While blockchain gained fame through cryptocurrencies, its applications in secure transactions and smart contracts are transforming traditional finance.</p>
      
      <h2>Embedded Finance: The New Normal</h2>
      <p>Financial services are being embedded into non-financial platforms, creating seamless user experiences and new revenue streams.</p>
    `,
    date: 'Feb 28, 2024',
    author: 'Sarah Ahmed',
    authorImage: '/images/authors/sarah.jpg',
    category: 'Fintech',
    tags: ['Fintech', 'Trends', 'Innovation'],
    readTime: '5 min read',
    featured: true,
    image: '/images/blog/fintech-trends.jpg'
  },
  {
    id: '2',
    slug: 'accounting-automation',
    title: 'How Automation is Transforming Accounting',
    excerpt: 'Discover how AI and machine learning are revolutionizing traditional accounting processes and improving accuracy.',
    content: `
      <h2>The Evolution of Accounting</h2>
      <p>Accounting has come a long way from manual ledgers to sophisticated digital solutions. Today, automation is taking it to the next level.</p>
      
      <h2>AI-Powered Bookkeeping</h2>
      <p>Machine learning algorithms can now categorize transactions, reconcile accounts, and flag anomalies with remarkable accuracy.</p>
      
      <h2>The Human Element</h2>
      <p>While automation handles repetitive tasks, accountants can focus on strategic advisory roles, adding more value to businesses.</p>
    `,
    date: 'Feb 25, 2024',
    author: 'Ali Raza',
    authorImage: '/images/authors/ali.jpg',
    category: 'Accounting',
    tags: ['Accounting', 'Automation', 'AI'],
    readTime: '4 min read',
    featured: false,
    image: '/images/blog/accounting-automation.jpg'
  },
  {
    id: '3',
    slug: 'tax-planning-strategies',
    title: 'Essential Tax Planning Strategies for SMEs',
    excerpt: 'Learn key tax planning strategies that can help small and medium enterprises optimize their tax position.',
    content: `
      <h2>Understanding Your Tax Obligations</h2>
      <p>SMEs face unique tax challenges. Understanding your obligations is the first step toward effective planning.</p>
      
      <h2>Deductions and Credits</h2>
      <p>Many SMEs miss out on valuable deductions and credits. We'll show you what to look for.</p>
      
      <h2>Year-Round Planning</h2>
      <p>Tax planning isn't just for tax season. Year-round strategies can significantly reduce your tax burden.</p>
    `,
    date: 'Feb 22, 2024',
    author: 'Fatima Khan',
    authorImage: '/images/authors/fatima.jpg',
    category: 'Tax',
    tags: ['Tax', 'SMEs', 'Planning'],
    readTime: '6 min read',
    featured: false,
    image: '/images/blog/tax-planning.jpg'
  },
  {
    id: '4',
    slug: 'financial-reporting-best-practices',
    title: 'Best Practices in Financial Reporting',
    excerpt: 'A comprehensive guide to maintaining accurate financial records and creating meaningful reports.',
    content: `
      <h2>The Importance of Accurate Reporting</h2>
      <p>Financial reports are the language of business. They communicate your company's health to stakeholders.</p>
      
      <h2>Key Financial Statements</h2>
      <p>Understanding balance sheets, income statements, and cash flow statements is essential for any business owner.</p>
      
      <h2>Common Pitfalls to Avoid</h2>
      <p>Learn about common financial reporting mistakes and how to avoid them.</p>
    `,
    date: 'Feb 20, 2024',
    author: 'Omar Hassan',
    authorImage: '/images/authors/omar.jpg',
    category: 'Reporting',
    tags: ['Reporting', 'Best Practices', 'Compliance'],
    readTime: '5 min read',
    featured: false,
    image: '/images/blog/financial-reporting.jpg'
  },
  {
    id: '5',
    slug: 'startup-financial-planning',
    title: 'Financial Planning Guide for Startups',
    excerpt: 'Essential financial planning tips every startup founder needs to know for sustainable growth.',
    content: `
      <h2>Building a Financial Foundation</h2>
      <p>Startups need solid financial foundations to attract investors and scale effectively.</p>
      
      <h2>Cash Flow Management</h2>
      <p>Cash is king in the startup world. Learn strategies to manage your burn rate and extend your runway.</p>
      
      <h2>Investor-Ready Financials</h2>
      <p>What investors look for in startup financials and how to prepare them.</p>
    `,
    date: 'Feb 18, 2024',
    author: 'Zara Malik',
    authorImage: '/images/authors/zara.jpg',
    category: 'Startups',
    tags: ['Startups', 'Planning', 'Funding'],
    readTime: '7 min read',
    featured: false,
    image: '/images/blog/startup-planning.jpg'
  },
  {
    id: '6',
    slug: 'payroll-compliance',
    title: 'Navigating Payroll Compliance in 2024',
    excerpt: 'Stay compliant with the latest payroll regulations and avoid common pitfalls.',
    content: `
      <h2>Understanding Payroll Regulations</h2>
      <p>Payroll compliance is complex and constantly changing. Stay up-to-date with the latest requirements.</p>
      
      <h2>Common Compliance Mistakes</h2>
      <p>Learn about frequent payroll errors and how to avoid them.</p>
      
      <h2>Automation Solutions</h2>
      <p>How technology can help streamline payroll and ensure compliance.</p>
    `,
    date: 'Feb 15, 2024',
    author: 'Usman Chaudhry',
    authorImage: '/images/authors/usman.jpg',
    category: 'Compliance',
    tags: ['Payroll', 'Compliance', 'HR'],
    readTime: '4 min read',
    featured: false,
    image: '/images/blog/payroll-compliance.jpg'
  }
];

// Configuration - Backend devs can change this to switch between mock and real API
const BLOG_CONFIG = {
  useMockData: true, // Set to false to use real API
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.fintechdynamics.com/v1',
  endpoints: {
    getAllBlogs: '/blogs',
    getBlogBySlug: '/blogs/:slug',
    getFeaturedBlog: '/blogs/featured',
    getBlogsByCategory: '/blogs/category/:category'
  }
};

// Blog Service - Central point for all blog data operations
export const BlogService = {
  // Get all blogs
  getAllBlogs: async () => {
    if (BLOG_CONFIG.useMockData) {
      return MOCK_BLOGS;
    }
    
    try {
      const response = await fetch(`${BLOG_CONFIG.apiBaseUrl}${BLOG_CONFIG.endpoints.getAllBlogs}`);
      if (!response.ok) throw new Error('Failed to fetch blogs');
      return await response.json();
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return []; // Return empty array on error
    }
  },

  // Get single blog by slug
  getBlogBySlug: async (slug) => {
    if (BLOG_CONFIG.useMockData) {
      return MOCK_BLOGS.find(blog => blog.slug === slug) || null;
    }
    
    try {
      const endpoint = BLOG_CONFIG.endpoints.getBlogBySlug.replace(':slug', slug);
      const response = await fetch(`${BLOG_CONFIG.apiBaseUrl}${endpoint}`);
      if (!response.ok) throw new Error('Failed to fetch blog');
      return await response.json();
    } catch (error) {
      console.error('Error fetching blog:', error);
      return null;
    }
  },

  // Get featured blog
  getFeaturedBlog: async () => {
    if (BLOG_CONFIG.useMockData) {
      return MOCK_BLOGS.find(blog => blog.featured) || MOCK_BLOGS[0];
    }
    
    try {
      const response = await fetch(`${BLOG_CONFIG.apiBaseUrl}${BLOG_CONFIG.endpoints.getFeaturedBlog}`);
      if (!response.ok) throw new Error('Failed to fetch featured blog');
      return await response.json();
    } catch (error) {
      console.error('Error fetching featured blog:', error);
      return null;
    }
  },

  // Get blogs by category
  getBlogsByCategory: async (category) => {
    if (BLOG_CONFIG.useMockData) {
      if (category === 'All') return MOCK_BLOGS;
      return MOCK_BLOGS.filter(blog => blog.category === category);
    }
    
    try {
      const endpoint = BLOG_CONFIG.endpoints.getBlogsByCategory.replace(':category', category);
      const response = await fetch(`${BLOG_CONFIG.apiBaseUrl}${endpoint}`);
      if (!response.ok) throw new Error('Failed to fetch blogs');
      return await response.json();
    } catch (error) {
      console.error('Error fetching blogs by category:', error);
      return [];
    }
  },

  // Get all categories (useful for filter)
  getAllCategories: async () => {
    if (BLOG_CONFIG.useMockData) {
      const categories = MOCK_BLOGS.map(blog => blog.category);
      return ['All', ...new Set(categories)];
    }
    
    // If using real API, you might have a separate endpoint for categories
    try {
      const response = await fetch(`${BLOG_CONFIG.apiBaseUrl}/categories`);
      if (!response.ok) throw new Error('Failed to fetch categories');
      return await response.json();
    } catch (error) {
      console.error('Error fetching categories:', error);
      return ['All'];
    }
  },

  // Search blogs
  searchBlogs: async (query) => {
    if (BLOG_CONFIG.useMockData) {
      return MOCK_BLOGS.filter(blog => 
        blog.title.toLowerCase().includes(query.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        blog.content.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    try {
      const response = await fetch(`${BLOG_CONFIG.apiBaseUrl}/blogs/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Failed to search blogs');
      return await response.json();
    } catch (error) {
      console.error('Error searching blogs:', error);
      return [];
    }
  },

  // Toggle mock data (useful for development)
  setUseMockData: (value) => {
    BLOG_CONFIG.useMockData = value;
  }
};

// For backend developers: Documentation on API expectations
/*
Expected API Response Format:

GET /blogs
[
  {
    id: string,
    slug: string,
    title: string,
    excerpt: string,
    content: string,
    date: string,
    author: string,
    authorImage?: string,
    category: string,
    tags?: string[],
    readTime?: string,
    featured?: boolean,
    image?: string
  }
]

GET /blogs/:slug
{
  id: string,
  slug: string,
  title: string,
  excerpt: string,
  content: string,
  date: string,
  author: string,
  authorImage?: string,
  category: string,
  tags?: string[],
  readTime?: string,
  featured?: boolean,
  image?: string
}

GET /blogs/featured
{
  ...blog object
}

GET /blogs/category/:category
[
  ...blog objects
]
*/