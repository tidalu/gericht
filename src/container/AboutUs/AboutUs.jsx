import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

function SmallSection({ title, text, className }) {
  return (
    <div className={className}>
      <h1 className="headtext__cormorant">{title}</h1>
      <img src={images.spoon} alt="about spoon" className="spoon__img" />
      <p className="p__opensans">{text}</p>
      <button type="button" className="custom__button">
        Know More
      </button>
    </div>
  );
}

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <SmallSection
        title="About Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec
        aliquet eu proin mauris et."
        className="app__aboutus-content_about"
      />

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>
      <SmallSection
        title="Our History"
        text="Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet."
        className="app__aboutus-content_history"
      />
    </div>
  </div>
);

export default AboutUs;
