import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessLowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessLowW100Filled'

      short_name='BrightnessLow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21.5-2.8-2.8H5.3v-3.9L2.5 12l2.8-2.8V5.3h3.9L12 2.5l2.8 2.8h3.9v3.9l2.8 2.8-2.8 2.8v3.9h-3.9Zm0-3.5q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18Z"/>
    </Icon>
  );
});

IconMaterialBrightnessLowW100Filled.displayName = 'AmauiIconMaterialBrightnessLowW100Filled';

export default IconMaterialBrightnessLowW100Filled;
