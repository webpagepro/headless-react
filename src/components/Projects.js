import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div>
                  <img src={project.better_featured_image.media_details.sizes.medium.source_url}
              alt={project.better_featured_image.alt_text} />
            </div>
        );
    }
}

export default Projects;