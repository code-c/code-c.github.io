// src/components/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
// import BlockContent from "@sanity/block-content-to-react";
import Markdown from "react-markdown";
import imageUrlBuilder from "@sanity/image-url";
import Image from "react-bootstrap/Image";
import moment from "moment";

//styling
import "../../styles/blog.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image,
        publishedAt
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

 let time = moment(postData.publishedAt).format('MMMM Do YYYY');

 let postImageUrl = urlFor(postData.mainImage).url();

  return (
    <div class="page-wrap"
    style={{
      backgroundImage: `url(${postImageUrl})`
    }}>
      <div class="post post-scroll">
        <div id="post-header">
          <div id="post-title">
            <h2>{postData.title}</h2>
          </div>
          <div id="post-author-info">
            <Image
              src={urlFor(postData.authorImage).width(40).url()}
              alt=""
              roundedCircle
            />
            <p>{postData.name} on {time}</p>
          </div>
          </div>
        <div id="content">
          <Markdown
          source={postData.body}
          />
        </div>
      </div>
    </div>
  );
}
