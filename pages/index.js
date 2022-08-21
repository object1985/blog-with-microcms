import Link from "next/link";
import { client } from '../libs/client';
import styles from '../styles/Home.module.scss'

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  console.log(data);
  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default function Home({ blogs }) {
  return (
    <div className={styles.container}>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            <a href="">{blog.title}</a>
          </Link>
        </li>
      ))}
    </div>
  )
}
