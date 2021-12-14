/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';
import styles from './Foot_1.module.scss';

const Footer_1 = (): JSX.Element => {
  return (
    <nav className="flex gap-[50px] w-[300px]">
      <ul className="flex gap-[50px] w-[500px]">
        <li>ページ1</li>
        <li>ページ2</li>
        <li>ページ3</li>
        <li>ページ4</li>
        <li>ページ5</li>
      </ul>
      <ul className="flex">
        <li>ページ6</li>
        <li>ページ7</li>
        <li>ページ8</li>
        <li>ページ9</li>
        <li>ページ10</li>
        <li>ページ11</li>
      </ul>
    </nav>
  );
};

export default Footer_1;
