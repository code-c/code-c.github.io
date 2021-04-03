
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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

      <div class="container-fluid padding card-layout">
        {/* <div class="row padding blog-layout"> */}
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                {/* card n link to make whole div clickable */}
                <Card>
                  <span key={index}>
                    <Card.Img src={post.mainImage.asset.url} alt="" />
                    <span>
                      <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Button class="btn btn-outline-secondary hvr-grow">See Post</Button>
                        </Card.Body>
                    </span>
                  </span>
                </Card>
              </Link>
            ))}
        </div>
      </div>
  );
}