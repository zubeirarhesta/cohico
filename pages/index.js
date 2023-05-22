import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import { Fragment } from "react";
import Head from "next/head";
import { getFeaturedPosts } from "@/lib/posts-util";
import Footer from "@/components/home-page/footer/footer";

export default function HomePage(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>cohico</title>
        <meta name="description" content="code, hike, cook with me" />
      </Head>
      <Hero />
      <FeaturedPosts items={posts} />
      <Footer />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
