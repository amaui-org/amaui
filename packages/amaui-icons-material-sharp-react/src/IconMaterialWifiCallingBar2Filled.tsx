import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiCallingBar2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCallingBar2Filled'

      short_name='WifiCallingBar2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-520q-17 0-28.5-11.5T620-560q0-17 11.5-28.5T660-600q17 0 28.5 11.5T700-560q0 17-11.5 28.5T660-520Zm-100-98-42-42q29-29 65.5-44.5T660-720q40 0 76.5 15.5T802-660l-42 42q-20-20-45.5-31T660-660q-29 0-54.5 11T560-618Zm238 498q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42Z"/>
    </Icon>
  );
});

IconMaterialWifiCallingBar2Filled.displayName = 'AmauiIconMaterialWifiCallingBar2Filled';

export default IconMaterialWifiCallingBar2Filled;
