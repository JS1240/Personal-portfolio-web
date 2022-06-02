import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/UniverseIos">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/JS1240">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/juresunic/">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;