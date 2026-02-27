// app/blog/page.jsx
import BlogHero from '@/components/page/blog/bloghero';
import FeaturedPost from '@/components/page/blog/featuredpost';
import BlogListing from '@/components/page/blog/bloglisting';
import Newsletter from '@/components/page/blog/newsletter';

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <FeaturedPost />
      <BlogListing />
      <Newsletter />
    </main>
  );
}