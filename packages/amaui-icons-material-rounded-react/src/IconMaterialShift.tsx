import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShift = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shift'

      short_name='Shift'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 896V616H204q-26 0-36.5-22.5T173 551l276-337q12-15 31-15t31 15l276 337q16 20 5.5 42.5T756 616H640v280q0 17-11.5 28.5T600 936H360q-17 0-28.5-11.5T320 896Zm80-40h160V536h111L480 302 289 536h111v320Zm80-320Z"/>
    </Icon>
  );
});

IconMaterialShift.displayName = 'AmauiIconMaterialShift';

export default IconMaterialShift;
