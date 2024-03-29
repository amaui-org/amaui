import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightSightMaxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightMaxFilled'

      short_name='NightSightMax'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 416h-80q-17 0-28.5-11.5T560 376q0-17 11.5-28.5T600 336h80v-80q0-17 11.5-28.5T720 216q17 0 28.5 11.5T760 256v80h80q17 0 28.5 11.5T880 376q0 17-11.5 28.5T840 416h-80v80q0 17-11.5 28.5T720 536q-17 0-28.5-11.5T680 496v-80Zm54 327q-38 88-117.5 140.5T440 936q-134 0-227-93t-93-227q0-115 73.5-203T380 302q12-2 21.5 2t14.5 13q5 9 6 21.5t-4 26.5q-9 22-13.5 45t-4.5 46q0 100 70 170t170 70q11 0 21-.5t20-2.5q18-3 29.5 1t18.5 12q7 8 8.5 17.5T734 743Z"/>
    </Icon>
  );
});

IconMaterialNightSightMaxFilled.displayName = 'AmauiIconMaterialNightSightMaxFilled';

export default IconMaterialNightSightMaxFilled;
