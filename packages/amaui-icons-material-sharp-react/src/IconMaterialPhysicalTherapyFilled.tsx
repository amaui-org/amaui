import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhysicalTherapyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhysicalTherapyFilled'

      short_name='PhysicalTherapy'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M640 776H375q-23 0-37.5 14T320 822q-3 18 5.5 35t30.5 25l229 91q10 4 19.5 2.5T622 969q8-5 13-13.5t5-19.5V776ZM400 176q66 0 113 47t47 113q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-66 47-113t113-47Zm369 360q29 0 50 19.5t21 48.5q0 23-13 42t-35 27l-72 23H375q-57 0-96 39t-39 96q0 18 5 34.5t13 30.5H120V736q0-83 58.5-141.5T320 536h449Z"/>
    </Icon>
  );
});

IconMaterialPhysicalTherapyFilled.displayName = 'AmauiIconMaterialPhysicalTherapyFilled';

export default IconMaterialPhysicalTherapyFilled;
