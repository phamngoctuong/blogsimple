import React from 'react';
import './style.css';
import Card from '../../../components/Ui/Card';
import {data} from './../../../data/blog.json';
const RecentPosts = (props) => {
  return (
    <div className="wrapperrecentposts">
      {
        data.map(post => {
          return (
            <Card key={post.id}>
              <div className="postImageWrapper">
                <img src={require('./../../../blogPostImages/' + post.blogImage)} alt={post.blogTitle}/>
              </div>
              <div className="recentcontent">
                <span className="category">{post.blogCategory}</span>
                <h2>{post.blogTitle}</h2>
                <span className="date"><span className="one">posted on</span><span className="two">{post.postedOn}</span><span className="three">by Sora Blogging Tips</span></span>
                <p>{post.blogText}</p>
                <a href="#" className="readmore">Read More</a>   
              </div>
            </Card>
          )
        })
      }
    </div>
  )
}
export default RecentPosts