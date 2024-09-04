import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiCallingBar1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCallingBar1Filled'

      short_name='WifiCallingBar1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M798-120q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42ZM660-520q-17 0-28.5-11.5T620-560q0-17 11.5-28.5T660-600q17 0 28.5 11.5T700-560q0 17-11.5 28.5T660-520Z"/>
    </Icon>
  );
});

IconMaterialWifiCallingBar1Filled.displayName = 'AmauiIconMaterialWifiCallingBar1Filled';

export default IconMaterialWifiCallingBar1Filled;
