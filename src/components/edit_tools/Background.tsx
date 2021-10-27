import React, { ReactElement, useContext } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { EditContext } from 'src/pages/template';
import bg from './Background.module.scss';

const BackgroundColor: React.VFC = (): ReactElement => {
  const editVar: EditVar = useContext(EditContext);
  const hundleBgColer = (e) => (editVar.currentTarget.style.backgroundColor = e.target.value);
  const { data, error } = useSWR('/api/colors', fetcher);
  console.log(data);

  if (error) {
    return <div>error</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  } else {
    const listColor = data.map((color: Color) => (
      <li key={color.id} className={`bg-${color.colorCode} flex-grow text-center`}>
        <button value={color.colorCode} onClick={hundleBgColer}>
          {color.name}
        </button>
      </li>
    ));
    return listColor;
  }
};

const fetcher: Fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

export default BackgroundColor;
