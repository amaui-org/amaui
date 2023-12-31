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
      <path d="M296-171q-25-1-47.5-13T206-219q-35-39-54.5-97T132-437q0-73 27-137t74.5-111.5q47.5-47.5 111-75T480-788q72 0 135.5 27.5T726-686q47 47 74.5 110.5T828-440q0 61-19.5 118.5T755-222q-22 26-44.5 38.5T662-171q-13 0-25-3t-24-9l-56-28q-18-9-38-13.5t-40-4.5q-21 0-40.5 4.5T402-211l-55 28q-13 7-25 10t-26 2Zm356-334h30q-21-67-76.5-108T480-654q-70 0-126 41t-77 108h29q21-55 69-88t105-33q28 0 53.5 8.5T582-594L460-438l22 17 122-156q16 14 28 32.5t20 39.5Z"/>
    </Icon>
  );
});

IconMaterialReadinessScoreW100Filled.displayName = 'AmauiIconMaterialReadinessScoreW100Filled';

export default IconMaterialReadinessScoreW100Filled;
