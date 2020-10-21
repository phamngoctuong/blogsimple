import React from 'react';
import Layout from '../../components/Layout';
import Postblog from '../../components/Postblog';
import './style.css';
function Post(props) {
  return (
    <Layout>
      <Postblog {...props}/>
    </Layout>
  )
}
export default  Post;