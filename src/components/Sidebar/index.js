import React, { useState, useEffect } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { data } from './../../data/blog.json';
console.log(data);
function Sidebar() {
  const [posts, setPost] = useState([]);
  useEffect(()=>{
    var posts = data;
    setPost(posts);
  },[posts]);
  if(posts.length == 0) return null;
  return (
    <div className="sidebar">
      <div className="widget">
        <h2 className="title">ABOUT-US</h2>
        <div className="widget-content">
          <div className="author-img">
            <img src={require('../../blogPostImages/' + posts[1].blogImage)} alt={posts[1].blogTitle} width="310" height="210"/>
          </div>
          <div className="author-snippet">
            <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica.</p>
          </div>
        </div>
      </div>
      <div className="widget">
        <h2 className="title">RECENT POST</h2>
        <div className="recent-posts-list">
          {
            posts.map(recentpost => {
              return(
                <div key={recentpost.id} className="recent-post-content">
                  <div className="recent-post-title"><a href={`/post/${recentpost.slug}`} target="_top">{recentpost.blogTitle}</a></div>
                  <div className="recent-posts-details"><FontAwesomeIcon icon={faClock} />&nbsp;{recentpost.postedOn}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
export default Sidebar;