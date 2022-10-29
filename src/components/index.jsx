import React from 'react';
import Footer from './common/Footer';
import NameAndPhoto from './Profile/NameAndPhoto';
import UserLinks from './Profile/UserLinks';

const Profile = () => (
  <div className="p-10">
    <NameAndPhoto />
    <UserLinks />
    <Footer />
  </div>
);

export default Profile;
