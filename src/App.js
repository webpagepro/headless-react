import React, { Component } from 'react';
import './App.css';
import { Card, CardImg, CardText, CardTitle, CardBody, Button } from 'reactstrap'
import TopNavBar from './components/TopNavBar'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  constructor() {
    super();

    this.state = {
      projects: []
    }
  }

  componentDidMount = async() =>  {
    try {
      const res = await fetch('http://localhost:8888/headless-react/admin/wp-json/wp/v2/projects')
      if (!res.ok) {
        throw new Error('API request failed.')
      }
        const response = await res.json()
          this.setState({
            projects: response
          })
        }
    catch (error) {
      this.setState({ error: true })
    }
  }


  render() {
    let path = "http://localhost:8888/headless-react/admin/wp-content/uploads/2019/03/" //logo3-150x97.png"
    let projects = this.state.projects.map((project, index) => {
      console.log("Projects ", this.state.projects)
     
      return (
        <div key={project.id}>
        <CardBody>
          <CardTitle>{project.title.rendered}</CardTitle>
          <CardTitle>{project.acf.company}</CardTitle>
           <CardText></CardText>
          <CardImg src={project.better_featured_image.media_details.sizes.thumbnail.source_url}
             alt={project.better_featured_image.alt_text}  /> 
             </CardBody>
            
        </div>
      )
    })
    return (
      <div className="App">
      <Header /> 

        <h1>Projects</h1>
        {projects}
      </div>
    );
  }
}
export default App;
