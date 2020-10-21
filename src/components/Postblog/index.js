import React, { useState, useEffect } from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { data } from './../../data/blog.json';
import Card from '../Ui/Card';
function Postblog(props) {
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: ""
  });
  const [slug, setSlug] = useState('');
  useEffect(() => {
    const { slug } = props.match.params;
    const post = data.find(post => post.slug == slug);
    setPost(post);
    setSlug(slug);
  },[post, props.match.params.slug]);
  if (post.blogImage == "") return null;
  return (
    <div className="wrapperrecentposts">
      <Card>
        <div className="post">
          <div className="recentcontent">
            <span className="category">{post.blogCategory}</span>
            <h2>{post.blogTitle}</h2>
            <span className="date">
              <span className="one">posted on</span>
              <span className="two">{post.postedOn}</span>
              <span className="three">by Sora Blogging Tips</span>
            </span>
            <a className="featured" href="#">
              <img src={require('../../blogPostImages/' + post.blogImage)} alt={post.blogTitle} />
            </a>
            <p>{post.blogText}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
export default Postblog;