import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSolarPower = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SolarPower'

      short_name='SolarPower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m2 22 2-10h16l2 10ZM3 4V2h3v2Zm1.45 16H11v-2H4.85ZM6.125 9.325 4.7 7.925 6.825 5.8 8.25 7.2ZM5.25 16H11v-2H5.65ZM12 7Q9.925 7 8.463 5.537 7 4.075 7 2h2q0 1.25.875 2.125T12 5q1.25 0 2.125-.875T15 2h2q0 2.075-1.462 3.537Q14.075 7 12 7Zm0-5Zm-1 9V8h2v3Zm2 9h6.55l-.4-2H13Zm0-4h5.75l-.4-2H13Zm4.875-6.675-2.1-2.125 1.4-1.4L19.3 7.9ZM18 4V2h3v2Z"/>
    </Icon>
  );
});

IconMaterialSolarPower.displayName = 'AmauiIconMaterialSolarPower';

export default IconMaterialSolarPower;
