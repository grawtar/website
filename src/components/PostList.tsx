import Link from "next/link";
import { IPost } from "../lib/postApi";

type Props = {
  posts: IPost[];
};

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.slug} passHref href={`/blog/${post.slug}`}>
          <a className="p-1 py-2.5 block rounded-sm text-lg leading-6 group cursor-pointer hover:bg-gray-50">
            <p className="font-semibold group-hover:underline">{post.title}</p>
            <p className="text-gray-500">{post.subTitle}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
