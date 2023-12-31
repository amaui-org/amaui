import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlidersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlidersW100Filled'

      short_name='Sliders'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-412q-29 0-48.5-19.5T132-480q0-29 19.5-48.5T200-548h560q29 0 48.5 19.5T828-480q0 29-19.5 48.5T760-412H200Zm360-28h200q17 0 28.5-11.5T800-480q0-17-11.5-28.5T760-520H560v80Z"/>
    </Icon>
  );
});

IconMaterialSlidersW100Filled.displayName = 'AmauiIconMaterialSlidersW100Filled';

export default IconMaterialSlidersW100Filled;
