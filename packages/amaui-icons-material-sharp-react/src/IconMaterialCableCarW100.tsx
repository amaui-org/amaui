import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCableCarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CableCarW100'

      short_name='CableCar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M319-184v-28H172v-28h40v-480h-40v-28h116l24-40h335l25 40h116v28h-40v480h40v28H641v28H319Zm-79-56h480v-228H240v228Zm240.24-73q16.76 0 28.26-11t11.5-27.76q0-16.77-11.74-28.5Q496.53-392 479.76-392q-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5Q440-335 451.74-324q11.73 11 28.5 11ZM240-496h141v-154q0-29.17-20.38-49.58Q340.24-720 311.12-720T261-699.58q-21 20.41-21 49.58v154Zm169 0h141v-154q0-29.17-20.38-49.58Q509.24-720 480.12-720T430-699.58q-21 20.41-21 49.58v154Zm170 0h141v-154q0-29.17-21-49.58Q678-720 648.88-720q-29.12 0-49.5 20.42Q579-679.17 579-650v154Zm-339 28h480-480Z"/>
    </Icon>
  );
});

IconMaterialCableCarW100.displayName = 'AmauiIconMaterialCableCarW100';

export default IconMaterialCableCarW100;
