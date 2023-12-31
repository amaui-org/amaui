import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReadinessScoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadinessScoreW100Filled'

      short_name='ReadinessScore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-171q-25-1-47.5-13T206-219q-35-39-54.5-97T132-437q0-73 27-137t74.5-111.5q47.5-47.5 111-75T480-788q72 0 135.5 27.5T726-686q47 47 74.5 110.5T828-440q0 61-19.5 118.5T755-222q-22 26-44.5 38.5T662-171q-13 0-25-3t-24-9l-56-28q-18-9-38-13.5t-40-4.5q-21 0-40.5 4.5T402-211l-55 28q-13 7-25 10t-26 2Zm-4-322q5 0 8.5-3.5t5.5-8.5q19-55 67-88t107-33q27 0 53 8.5t49 23.5L468-447q-4 5-2.5 10.5t6.5 8.5q5 3 10 2t9-6l113-145q17 15 29.5 33t18.5 39q2 5 6 8.5t9 3.5q8 0 11.5-6.5t.5-14.5q-23-63-77.5-101.5T480-654q-67 0-122 38.5T280-514q-3 8 1 14.5t11 6.5Z"/>
    </Icon>
  );
});

IconMaterialReadinessScoreW100Filled.displayName = 'AmauiIconMaterialReadinessScoreW100Filled';

export default IconMaterialReadinessScoreW100Filled;
