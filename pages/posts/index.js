import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

export default function AllPostsPage(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="List of all my activities" />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
