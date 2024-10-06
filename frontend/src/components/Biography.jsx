import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            
Biography for Medico Medical Institute:

Medico Medical Institute stands as a leading healthcare facility, renowned for its commitment to providing top-quality medical services with a personal touch. Our experienced team of healthcare professionals works closely with each patient, ensuring tailored care that addresses individual health needs. With cutting-edge technology and a patient-centered approach, Medico is dedicated to promoting overall wellness and guiding patients on a smooth, supportive journey towards optimal health. At Medico, we believe in not just treating conditions, but enhancing the quality of life for every patient we serve.
          </p>
          <p>Medico Medical Institute</p>
          <p>
            Medico Medical Institute offers a wide range of healthcare services designed to meet the diverse needs of patients across all ages. With a commitment to innovation and excellence, we provide advanced medical care in a compassionate and patient-friendly environment.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
