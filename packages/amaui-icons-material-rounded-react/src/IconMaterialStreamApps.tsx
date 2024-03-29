import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStreamApps = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreamApps'

      short_name='StreamApps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M640 616h200V496H640v120Zm0 80-46 46q-10 10-22 5t-12-19V456q0-17 11.5-28.5T600 416h280q17 0 28.5 11.5T920 456v200q0 17-11.5 28.5T880 696H640Zm-360 320q-33 0-56.5-23.5T200 936V216q0-33 23.5-56.5T280 136h400q33 0 56.5 23.5T760 216v160h-80v-40H280v480h400v-40h80v160q0 33-23.5 56.5T680 1016H280Zm0-120v40h400v-40H280Zm0-640h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Zm360-280V496v120Z"/>
    </Icon>
  );
});

IconMaterialStreamApps.displayName = 'AmauiIconMaterialStreamApps';

export default IconMaterialStreamApps;
