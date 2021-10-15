import React from 'react'
import Head from 'next/head'
import { withRedux } from '../lib/redux'
import TextInput from '../components/textInput'
import Words from '../components/words'
import Definition from '../components/definition'
import WordChart from '../components/wordChart'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css" integrity="sha384-SI27wrMjH3ZZ89r4o+fGIJtnzkAnFs3E4qz9DIYioCQ5l9Rd/7UAa8DHcaL8jkWt" crossOrigin="anonymous" />
      <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
      <script src="https://unpkg.com/popper.js@1.16.0/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/js/bootstrap.min.js" integrity="sha384-3qaqj0lc6sV/qpzrc1N5DC6i1VRn/HyX4qdPaiEFbn54VjQBEU341pvjz7Dv3n6P" crossOrigin="anonymous"></script>
    </Head>

    <div>
      <div className="header">
        <h1 className="text-center header-text">Word Counter</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <TextInput />
          </div>
          <div className="col-sm">
            <Words />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <WordChart />
          </div>
        </div>
        <Definition />
      </div>
    </div>
    <style jsx>{`
      .header {
        height: 200px;
        margin-bottom: 30px;
        background: rgb(2,0,36);
        background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(43,240,216,1) 0%, rgba(255,255,255,1) 100%);
      }

      .header-text {
        padding-top: 50px;
        padding-bottom: 50px;
        color: #ffffff;
      }
    `}</style>
  </div>
)

export default withRedux(Home)
