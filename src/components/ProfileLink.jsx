import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProfileLink = () => {
    const [profileData, setProfileData] = useState(null);
    const githubUsername = 'Chayan2'; // Replace with your GitHub username

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${githubUsername}`, {
                    headers: {
                        'Accept': 'application/vnd.github+json'
                        // You can add your 'Authorization' header here if needed
                    }
                });

                if (!response.ok) {
                    console.error(`HTTP error! status: ${response.status}`);
                    return;
                }

                const userData = await response.json();
                setProfileData(userData);
            } catch (error) {
                console.error('Error fetching GitHub profile:', error);
            }
        };

        fetchUserProfile();
    }, [githubUsername]);

    return (
        <motion.div
            className="profile-link"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }} // Adjust delay as needed
        >
            {profileData ? (
                <a
                    href={`https://github.com/${githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link-inner"
                >
                    <img
                        src={profileData.avatar_url}
                        alt={`${profileData.login}'s Avatar`}
                        className="profile-avatar"
                        width="30"
                        height="30"
                    />
                    {/* <span className="profile-username">{profileData.login}</span> */}
                </a>
            ) : (
                <span>Loading Profile...</span>
            )}
        </motion.div>
    );
};

export default ProfileLink;