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
      <path d="M680 536V416H560v-80h120V216h80v120h120v80H760v120h-80ZM440 936q-134 0-227-93t-93-227q0-134 93-227t227-93q5 0 10 .5t10 .5q-29 32-44.5 72.5T400 456q0 100 70 170t170 70q32 0 61-8t55-22q-18 115-106.5 192.5T440 936Z"/>
    </Icon>
  );
});

IconMaterialNightSightMaxFilled.displayName = 'AmauiIconMaterialNightSightMaxFilled';

export default IconMaterialNightSightMaxFilled;
