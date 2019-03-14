import React, { Component } from 'react';
import './App.css';

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
        const projects = await res.json()
          this.setState({
            projects: projects
          })
        }
    catch (error) {
      this.setState({ error: true })
    }
  }


  render() {

    let projects = this.state.projects.map((project, index) => {
      return (

        <div key={index}>

          <imgage src={project.better_featured_image.media_details.file.src}
            alt={project.better_featured_image.alt_text} />
        </div>
      )
    })
    return (
      <div className="App">
        <h1>Projects</h1>
        {projects}
      </div>
    );
  }
}
export default App;
