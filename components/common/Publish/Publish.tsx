import React, { useRef, useEffect, useState } from 'react';
import styles from './Publish.module.scss';

const Publish = () => {
  const [PublishFilter, setPublishFilter] = useState<string | null>('发布');
  useEffect(() => {
    const PublishOption: any = document.getElementById('PublishOption');
    PublishOption.addEventListener('click', function (e: any) {
      setPublishFilter(e.target.innerHTML);
      // PublishOption.style.display="block"
      console.log(e.target.innerHTML);
    });

    const PublishBtn: any = document.getElementById('PublishBtn');
    PublishBtn.addEventListener('click', function (e: any) {
      e.stopPropagation();
      console.log('是否又进来');
      if (
        getComputedStyle(PublishOption, null).getPropertyValue('display') ==
        'none'
      ) {
        PublishOption.style.display = 'block';
        console.log(
          getComputedStyle(PublishOption, null).getPropertyValue('display'),
        );
      } else if (
        getComputedStyle(PublishOption, null).getPropertyValue('display') ==
        'block'
      ) {
        PublishOption.style.display = 'none';
        console.log(
          getComputedStyle(PublishOption, null).getPropertyValue('display'),
        );
      }
    });
  }, []);
  return (
    <div>
      <span id="PublishBtn" className={styles.conditionBtn}>
        {PublishFilter}
        <ul id="PublishOption" className={styles.List}>
          <li>示例</li>
          <li>问题</li>
          <li>理论</li>
          <li>报错</li>
        </ul>
      </span>
    </div>
  );
};
export default Publish;
