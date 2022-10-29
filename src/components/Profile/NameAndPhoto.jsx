import React from 'react';
import ProfileImage from '../images/profile__img.png';

const NameAndPhoto = () => (
  <div>
    <div className="flex flex-col items-center justify-center">
      <img src={ProfileImage} alt="Profile Icon" className="w-[88px] my-5" id="profile__img" />
      <p className="mb-10 font-bold text-[20px] text-[#101828]">Odili Chekwube Winifred</p>
    </div>
  </div>
);

export default NameAndPhoto;
