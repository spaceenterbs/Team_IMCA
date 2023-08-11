<<<<<<< HEAD
import './MusicalList.css';
import React from 'react';
=======
import styles from './MusicalList.module.css';
>>>>>>> d8c7f2f0c13031184065fde7db5e8490a34826ed

const MusicalList = ({ img, title, startDate, endDate, place }) => {
  return (
    <div className={styles.MusicalList}>
      <div className={styles.musical_wrapper}>
        <div>
          <img className={styles.musical_poster} alt="" src={img} />
        </div>
        <div>{title}</div>
        <div>
          <span>{startDate} - </span>
          <span>{endDate}</span>
        </div>
        <div>{place}</div>
      </div>
    </div>
  );
};

export default MusicalList;
//백엔드에서 정보 가공하여 넘겨주면 다시 작업할 것.
