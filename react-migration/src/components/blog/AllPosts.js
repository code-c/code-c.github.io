
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div class="col-12">
						<h2 class="display text-center headings">Blog</h2>
      </div>

      <div class="container-fluid padding blog-layout">
        {/* <div class="row padding blog-layout"> */}
          {allPostsData &&
            allPostsData.map((post, index) => (
              <div class="col-md-4">
                <div class="card">
                  <Link to={"/" + post.slug.current} key={post.slug.current}>
                    <span key={index}>
                      <img src={post.mainImage.asset.url} alt="" />
                      <span>
                        <div class="card-body">
                          <h4 class="card-title">{post.title}</h4>
                          <button class="btn btn-outline-secondary hvr-grow">See Post</button>
                        </div>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    // </div>
  );
}