import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStressManagementW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StressManagementW100'

      short_name='StressManagement'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480.306 710q58.306 0 126-19T791 621q5-18 7-36t2-38q0-11-8.5-18t-19.5-4q-14 5-31 10.5T698 552q-69 29-118 40.5T480 604q-52 0-102-12t-122-41q-26-11-40-16l-28-10q-11-4-19.5 3.5T160 547q0 19.594 2 38.297Q164 604 169 622q98 45 175.5 66.5T480.306 710Zm-.745 134Q585 844 664.5 792.5T779 657q-96 42-166.47 61.5T480.004 738Q419 738 344 718t-163-60q34 85 113 135.5T479.561 844ZM480 496q-56 0-95-39t-39-95q0-56 39-95t95-39q56 0 95 39t39 95q0 56-39 95t-95 39Zm.195-28Q524 468 555 436.805q31-31.194 31-75Q586 318 554.805 287q-31.194-31-75-31Q436 256 405 287.195q-31 31.194-31 75Q374 406 405.195 437q31.194 31 75 31Zm-.287 404Q328 872 230 782t-98-235q0-26 20-41.5t44-7.5q15.147 4.821 31.713 11.089Q244.28 515.357 267 525q71 29 117.233 40 46.232 11 95.767 11 48 0 93.5-10.5T687 527q27-11 44.5-17.5T764 498q24-8 44 8t20 41q0 69-27.5 128T726 778q-47 44-110.5 69t-135.592 25Z"/>
    </Icon>
  );
});

IconMaterialStressManagementW100.displayName = 'AmauiIconMaterialStressManagementW100';

export default IconMaterialStressManagementW100;
