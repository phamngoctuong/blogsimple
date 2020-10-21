import React from 'react';
import Card from './../../components/Ui/Card';
import Layout from '../../components/Layout';
import RecentPosts from './RecentPosts';
import './style.css';
import {data} from './../../data/blog.json';
class Home extends React.Component {
  render() {
    const SideImage  = (props) => {
      return (
        <div style={{ height: `${props.height}px`  }}>
          <img src={props.src} alt={props.alt}/>
        </div>
      )
    }
    const ImageGallary = (props) => {
      return (
        <div className="hotpost" style={{height: props.gallaryHeight}}>
          <section className="hotpost_item hotpost-large" style={{width: props.largeWidth}}>
            <img src={require('./../../blogPostImages/' + props.imagesArray[1].blogImage)} alt={props.imagesArray[1].blogTitle} />
          </section>
          <section className="hotpost_item hotpost-small" style={{width: props.smallWidth}}>
            {
              props.imagesArray.map((image)=>{
                return (
                  <SideImage key={image.id} src={require('./../../blogPostImages/' + image.blogImage)} height={props.sideImageHeight} alt={image.blogTitle} />
                )
              })
            }
          </section>
        </div>
      )
    }
    const gallaryHeight = 450;
    const sideImageHeight = gallaryHeight / 3 - 4;
    const imgAr = [];
    for(let i = 2; i < data.length; i++) {
      imgAr.push(data[i]);
    }
    return (
      <div className="home">
        <Card>
          <ImageGallary largeWidth="70%" smallWidth="calc(30% - 5px)" sideImageHeight={sideImageHeight} gallaryHeight={gallaryHeight} imagesArray={imgAr}/>
        </Card>
        <Layout>
          <RecentPosts />
        </Layout>
      </div>
    );
  }
}
export default Home;