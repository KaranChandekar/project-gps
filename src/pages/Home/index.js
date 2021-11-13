import React from "react";
import Layout from '../../components/Layout'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Home () {

  return (
    <Layout>
      <p>Home Page</p>
      <Button as={Link} to='/login'>
        Redirect to Login Page
      </Button>
    </Layout>
  )
}

export default Home