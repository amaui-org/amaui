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
      <path d="M640 616h200V496H640v120Zm-80 160V416h360v280H640l-80 80Zm-360 240V136h560v240h-80v-40H280v480h400v-40h80v240H200Zm80-120v40h400v-40H280Zm0-640h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Zm360-280V496v120Z"/>
    </Icon>
  );
});

IconMaterialStreamApps.displayName = 'AmauiIconMaterialStreamApps';

export default IconMaterialStreamApps;
