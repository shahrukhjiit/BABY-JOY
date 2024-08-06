import React from 'react';
import './About.css';
import Header from '../component/Header';
import Footer from '../component/footer';

const About = () => {
  return (
    <>
      <Header />
      <form className="about-form">
        <div className="about-section">
          <h2 className="about-title">About Baby Joy</h2>
          <div className="about-content">
            <p>
              Welcome to Baby Joy! At Baby Joy, we understand the importance of your little one's happiness and well-being. Our mission is to provide a delightful and nurturing environment for both babies and parents alike.
            </p>
            <p>
              Whether you're a new parent seeking guidance or a seasoned caregiver looking for innovative products, we're here to support you every step of the way.
            </p>
            <p>
              Explore our curated selection of baby essentials, read insightful articles on parenting, and connect with a community of like-minded individuals who share your joy and challenges.
            </p>
            <p>
              Thank you for choosing Baby Joy as your trusted partner on this incredible journey of parenthood!
            </p>
          </div>
        </div>

        <div className="about-section">
          <h3 className="about-title">Our Commitment to Quality</h3>
          <div className="about-content">
            <p>
              At Baby Joy, we are committed to providing the highest quality products for your baby. We carefully select each item in our inventory to ensure safety, comfort, and durability.
            </p>
            <p>
              Whether it's clothing, toys, or feeding accessories, you can trust that every product has undergone rigorous testing and meets our strict standards for excellence.
            </p>
          </div>
        </div>

        <div className="about-section">
          <h3 className="about-title">Join Our Community</h3>
          <div className="about-content">
            <p>
              Connect with us on social media to stay updated on the latest news, promotions, and parenting tips. Join our growing community of parents who share a passion for providing the best for their little ones.
            </p>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default About;
