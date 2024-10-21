import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>NewsApp</h3>
          <p>
            A news aggregator application built using React and RESTful APIs. It
            fetches news articles from various sources and allows users to
            filter by categories.
          </p>
          <a
            href="https://github.com/yourusername/newsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </li>
        <li>
          <h3>iNotebook</h3>
          <p>
            A note-taking application developed with React and Node.js. Users
            can create, edit, and delete notes, with data stored in MongoDB.
          </p>
          <a
            href="https://github.com/yourusername/inotebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </li>
        <li>
          <h3>Travel Website</h3>
          <p>
            A travel destination website showcasing various locations, built
            using Next.js and styled with Bootstrap. It includes features like
            user reviews and a booking form.
          </p>
          <a
            href="https://github.com/yourusername/travel-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </li>
        <li>
          <h3>Weather App</h3>
          <p>
            A weather application that fetches data from OpenWeatherMap API to
            display current weather conditions based on the user's location or
            input. Built using React.
          </p>
          <a
            href="https://github.com/yourusername/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </li>
        <li>
          <h3>Chat Application</h3>
          <p>
            A real-time chat application built using React, Node.js, and
            Socket.io, allowing users to communicate in different chat rooms.
          </p>
          <a
            href="https://github.com/yourusername/chat-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </li>
        <li>
          <h3>Gym Website</h3>
          <p>
            A gym management website featuring a user-friendly interface with
            information on classes, trainers, and membership options. Built
            using React and Bootstrap.
          </p>
          <a
            href="https://github.com/yourusername/gym-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
