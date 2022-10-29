import React from 'react';
import Data from './LinkData';
import Slack from '../images/slack.png';
import Github from '../images/github.png';

const UserLinks = () => {
  const data = Data;
  return (
    <div>
      {
        data && data.map((item) => (
          <ul key={item.id}>
            <l className="text-[#101828] text-[18px] rounded-[8px] flex flex-col items-center justify-center w-[100%] bg-[#EAECF0] py-5 my-2"><a href={item.href} target="__blank" id={item.styleId}>{item.name}</a></l>
          </ul>
        ))
      }
      <div className="flex gap-10 items-center justify-center w-[100%] mt-5">
        <a href="https://slack.com" target="__blank"><img src={Slack} alt="Slack Icon" /></a>
        <a href="https://github.com/winner-winifred" target="__blank"><img src={Github} alt="Github Icon" /></a>
      </div>
    </div>
  );
};

export default UserLinks;
