// src/components/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
// import BlockContent from "@sanity/block-content-to-react";
import Markdown from "react-markdown";
import imageUrlBuilder from "@sanity/image-url";
import Image from "react-bootstrap/Image";
import moment from "moment";

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

 let time = moment(postData.publishedAt).format('MMMM Do YYYY')

  return (
    <div class="page-wrap">
      <div class="post">
        <img id="post-image" src={urlFor(postData.mainImage).width(200).url()} alt="" />
        <div id="post-title" class="col-12">
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
        <div id="content">
          <Markdown
          source={postData.body}
          />
        </div>
      </div>
    </div>
  );
}
