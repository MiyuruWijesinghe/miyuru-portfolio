import { useEffect, useState } from "react";

function Blogs() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    const fetchBlogs = async () => {

      const res = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@miyuruwijesinghe&cache=false"
      );

      const data = await res.json();

      setBlogs(data.items.slice(0, 3));

    };

    fetchBlogs();

  }, []);

  const extractImage = (content) => {
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  };

  return (
    <section id="blogs" className="section">

      <div className="container max-w-6xl mx-auto">

        <h2 className="section-title">Blogs</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (

            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition duration-300"
            >

              {/* Blog Image */}
              <div className="aspect-[4/3] overflow-hidden">

                <img
                  src={blog.thumbnail || extractImage(blog.content)}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Blog Content */}
              <div className="p-5">

                <h3 className="font-semibold mb-2">
                  {blog.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {new Date(blog.pubDate).toDateString()}
                </p>

              </div>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;