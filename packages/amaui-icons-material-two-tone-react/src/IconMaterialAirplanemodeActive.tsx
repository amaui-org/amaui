import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplanemodeActive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplanemodeActive'

      short_name='AirplanemodeActive'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19 v-5.5L22,16z"/><path d="M0,0h24v24H0V0z" fill="none"/></g>
    </Icon>
  );
});

IconMaterialAirplanemodeActive.displayName = 'AmauiIconMaterialAirplanemodeActive';

export default IconMaterialAirplanemodeActive;
