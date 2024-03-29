import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckInOut = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckInOut'

      short_name='CheckInOut'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M261 856q-51 0-85-34t-34-85q0-51 34-85.5t85-34.5q51 0 85 34t34 85q0 51-34 85.5T261 856ZM153 535V296h51v239h-51Zm108 275q31 0 51-21t20-53q0-32-19.5-52.5T261 663q-31 0-51 20.5T190 736q0 32 20 53t51 21Zm-11-275V296h56l90 152-2-38V296h50v239h-51l-96-161 3 38v123h-50Zm262 321q-42 0-67-27t-25-72V617h49v143q0 21 12.5 35t30.5 14q18 0 30-14t12-35V617h49v140q0 45-25 72t-66 27Zm194 0V664h-64v-47h176v47h-63v192h-49Z"/>
    </Icon>
  );
});

IconMaterialCheckInOut.displayName = 'AmauiIconMaterialCheckInOut';

export default IconMaterialCheckInOut;
