import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css/contactus.css'; // Create this CSS file
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import the Leaflet library

// Fix for Leaflet's default marker icons not being found
import marker from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: markerShadow,
});

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [map, setMap] = useState(null); // State to hold the map instance

  // Coordinates for Garhakota, Madhya Pradesh, India
  const yourLatitude = 23.8333;
  const yourLongitude = 78.8667;

  const initMap = (userLat, userLng) => {
    document.getElementById('mapContainer').style.display = 'block';
    const garhakotaLatLng = [yourLatitude, yourLongitude];
    const userLatLng = [userLat, userLng];

    let bounds = L.latLngBounds([garhakotaLatLng]);
    if (userLat !== yourLatitude || userLng !== yourLongitude) {
      bounds.extend(userLatLng);
    }

    const newMap = L.map('mapContainer').fitBounds(bounds, { padding: [50, 50] });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(newMap);

    L.marker(userLatLng).addTo(newMap)
      .bindPopup('user location')
      .openPopup();

    L.marker(garhakotaLatLng).addTo(newMap)
      .bindPopup('chayan');

    // Draw a polyline between the two locations if the user's location is different
    if (userLat !== yourLatitude || userLng !== yourLongitude) {
    //   L.polyline([userLatLng, garhakotaLatLng], { color: 'blue' }).addTo(newMap);
      L.polygon([userLatLng, garhakotaLatLng], { color: 'red', fillOpacity: 0.1 }).addTo(newMap);
    }

    setMap(newMap);
  };

  const getLocationAndInitMap = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          initMap(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          initMap(yourLatitude, yourLongitude); // Fallback to Garhakota
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      initMap(yourLatitude, yourLongitude); // Fallback to Garhakota
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('https://formspree.io/f/xpwpvvqw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        getLocationAndInitMap();
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.3 } },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.5 } },
  };

  useEffect(() => {
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [map]);

  return (
    <section className="contact-us modern" id="contact">
      <motion.div className="contact-container" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="contact-info" variants={infoVariants}>
          <h2>Let's Connect!</h2>
          <p>Feel free to reach out for collaborations, opportunities, or just a friendly hello.</p>
          <div className="info-item">
            <MdEmail className="icon" />
            <p><a href={`mailto:${'twinklechayan@gmail.com'}`}>twinklechayan@gmail.com</a></p>
          </div>
          <div className="info-item">
            <MdLocationOn className="icon" />
            <p>Garhakota, Madhya Pradesh, India</p>
          </div>
          <div className="info-item">
            <MdPhone className="icon" />
            <p><a href={`tel:${'+917247544288'}`}>+91 7247544288</a></p>
          </div>
          {/* You can add links to your social media profiles here */}
        </motion.div>

        <motion.form className="contact-form" onSubmit={handleSubmit} variants={formVariants}>
          <h2>Send me a message</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" required></textarea>
          </div>
          <button type="submit" disabled={status === 'Sending...'}>Submit</button>
          {status && <p className="status-message">{status}</p>}
        </motion.form>

        <div id="mapContainer" style={{ height: '300px', width: '100%', display: 'none', marginTop: '20px' }}></div>
      </motion.div>
    </section>
  );
};

export default ContactUs;