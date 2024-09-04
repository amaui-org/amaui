import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesFold2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFold2W100Filled'

      short_name='DevicesFold2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M659-172H313q-25 0-42.5-17.5T253-232v-496q0-25 17.5-42.5T313-788h371q19 0 33.5 10.5T739-750l81 202q12 29-6 55.5T764-466h-45v234q0 25-17.5 42.5T659-172Zm0-28q14 0 23-9t9-23v-234H408q-19 0-33.5-10.5T353-504l-72-179v451q0 14 9 23t23 9h346Z"/>
    </Icon>
  );
});

IconMaterialDevicesFold2W100Filled.displayName = 'AmauiIconMaterialDevicesFold2W100Filled';

export default IconMaterialDevicesFold2W100Filled;
