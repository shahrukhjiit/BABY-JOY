import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import backgroundImage from '../assest/contact3.jpeg'; 
import Header from '../component/Header';

function ContactPage() {
  const teamMembers = [
    {
      name: 'shahrukh khan',
      email: 'shahrukhkhanspn105@gmail.com',
      phone: '7355107511',
      imageUrl: '/assest/shahrukh2.jpeg', 
      instagramUrl: 'https://www.instagram.com/shahrukh7445/',
      linkedinUrl: 'https://www.linkedin.com/feed/',
      gmailUrl: 'mailto:shahrukhkhanspn105@gmail.com'
    },
    {
      name: 'Tanmay singh',
      email: 'tanmaypcvn44@gmail.com',
      phone: '9026964501',
      imageUrl: '/assest/tanmay.jpeg', 
      instagramUrl: 'https://www.instagram.com/tanmay_o8_o9?utm_source=qr&igsh=MTZqb2t4NnNhZW54NA==',
      linkedinUrl: 'https://www.linkedin.com/in/tanmay-singh-8b2919211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      gmailUrl: 'mailto:tanmaypcvn44@@gmail.com'
    },
    {
      name: 'Aman kumar',
      email: 'amanofficial2004@gmailcom',
      phone: '9389590437',
      imageUrl: '/assest/aman.jpeg', 
      instagramUrl: 'https://www.instagram.com/aman_kumar2004/',
      linkedinUrl: 'https://www.linkedin.com/in/aman-kumar-881713230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      gmailUrl: 'mailto:amanofficial2004@gmail.com'
    },
  ];

  return (
    <>
      <Header/>
      <div className="bg-cover bg-left min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, color: 'white' }}>
        <div className="container mx-auto py-8">
          <h1 className="text-6xl font-bold mb-20 text-center text-white hover:text-yellow-400 transition-colors duration-300">Our Team</h1> {/* Increased font size and added hover effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative">
                <div
                  className="bg-cover bg-center rounded-lg shadow-md p-6 transition duration-300 transform hover:shadow-lg"
                  style={{ backgroundImage: `url(${member.imageUrl})`, minHeight: '400px' }} 
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75">
                    <h2 className="text-2xl font-semibold mb-2">{member.name}</h2> {/* Increased font size */}
                    <p className="text-gray-200 mb-2">{member.email}</p>
                    <p className="text-gray-200 mb-2">{member.phone}</p>
                    <div className="flex gap-2">
                      <a href={member.instagramUrl} target="_blank" rel="noopener noreferrer"><FaInstagram className="text-white" /></a>
                      <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-white" /></a>
                      <a href={member.gmailUrl}><FaEnvelope className="text-white" /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
